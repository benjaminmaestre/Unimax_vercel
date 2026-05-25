const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const darkOutputPath = "C:/Users/BOne/.gemini/antigravity-ide/brain/eac7515e-eb79-41b3-8d22-785454c8e49f/page_dark.png";
const lightOutputPath = "C:/Users/BOne/.gemini/antigravity-ide/brain/eac7515e-eb79-41b3-8d22-785454c8e49f/page_light.png";
const standardOutputPath = "C:/Users/BOne/.gemini/antigravity-ide/brain/eac7515e-eb79-41b3-8d22-785454c8e49f/page.png";
const targetUrl = "http://localhost:3000";

console.log("Starting Google Chrome in headless mode...");
const chrome = spawn(chromePath, [
  "--headless=old",
  "--remote-debugging-port=9222",
  "--disable-gpu",
  "--window-size=1280,1024",
  targetUrl
]);

chrome.on('error', (err) => {
  console.error("Failed to start Chrome:", err);
  process.exit(1);
});

// Wait for Chrome to initialize
setTimeout(async () => {
  try {
    console.log("Fetching WebSocket debugger URL from Chrome...");
    const res = await fetch("http://127.0.0.1:9222/json");
    const targets = await res.json();

    const pageTarget = targets.find(t => t.type === 'page');
    if (!pageTarget) {
      throw new Error("No active page target found in Chrome!");
    }

    const wsUrl = pageTarget.webSocketDebuggerUrl;
    console.log(`Connecting to WebSocket: ${wsUrl}`);

    const ws = new WebSocket(wsUrl);
    let msgId = 1;
    const pendingRequests = new Map();

    function sendCommand(method, params = {}) {
      const id = msgId++;
      const msg = JSON.stringify({ id, method, params });
      ws.send(msg);
      return new Promise((resolve, reject) => {
        pendingRequests.set(id, { resolve, reject });
      });
    }

    ws.onopen = async () => {
      console.log("WebSocket connection established!");
      try {
        console.log("Enabling Page and Runtime domains...");
        await sendCommand("Page.enable");
        await sendCommand("Runtime.enable");

        console.log("Executing page scrolling animation to trigger Framer Motion (Dark Mode)...");
        const scrollExpr = `
          new Promise(resolve => {
            let totalHeight = document.body.scrollHeight;
            let currentScroll = 0;
            let step = 400;
            let interval = setInterval(() => {
              window.scrollBy(0, step);
              currentScroll += step;
              if (currentScroll >= totalHeight || currentScroll >= 9500) {
                clearInterval(interval);
                window.scrollTo(0, 0);
                setTimeout(() => resolve(totalHeight), 600);
              }
            }, 80);
          })
        `;
        const scrollResult = await sendCommand("Runtime.evaluate", {
          expression: scrollExpr,
          awaitPromise: true
        });
        console.log("Scrolling done! Page height is:", scrollResult.result.value);

        console.log("Capturing full-page screenshot (Dark Mode)...");
        const screenshotResultDark = await sendCommand("Page.captureScreenshot", {
          format: "png",
          captureBeyondViewport: true
        });

        const base64Dark = screenshotResultDark.data;
        if (!base64Dark) {
          throw new Error("Failed to capture dark screenshot data!");
        }

        console.log(`Writing Dark Mode screenshot to: ${darkOutputPath}`);
        fs.writeFileSync(darkOutputPath, Buffer.from(base64Dark, 'base64'));
        // Copy to standard page.png as well
        fs.writeFileSync(standardOutputPath, Buffer.from(base64Dark, 'base64'));

        console.log("Toggling theme to Light Mode...");
        const clickExpr = `
          (() => {
            const btn = document.querySelector('button[aria-label="Toggle Theme"]');
            if (btn) {
              btn.click();
              return "Clicked theme toggle";
            }
            return "Theme toggle button not found";
          })()
        `;
        const clickResult = await sendCommand("Runtime.evaluate", { expression: clickExpr });
        console.log("Theme click result:", clickResult.result.value);

        // Wait 1.5s for the transition to finish and light mode styling to settle
        console.log("Waiting for theme transition to complete...");
        await new Promise(resolve => setTimeout(resolve, 1500));

        console.log("Executing page scrolling animation to trigger Framer Motion (Light Mode)...");
        await sendCommand("Runtime.evaluate", {
          expression: scrollExpr,
          awaitPromise: true
        });

        console.log("Capturing full-page screenshot (Light Mode)...");
        const screenshotResultLight = await sendCommand("Page.captureScreenshot", {
          format: "png",
          captureBeyondViewport: true
        });

        const base64Light = screenshotResultLight.data;
        if (!base64Light) {
          throw new Error("Failed to capture light screenshot data!");
        }

        console.log(`Writing Light Mode screenshot to: ${lightOutputPath}`);
        fs.writeFileSync(lightOutputPath, Buffer.from(base64Light, 'base64'));

        console.log("Verification captures complete!");

        ws.close();
        chrome.kill();
        process.exit(0);
      } catch (err) {
        console.error("Error during Chrome DevTools interaction:", err);
        ws.close();
        chrome.kill();
        process.exit(1);
      }
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.id && pendingRequests.has(data.id)) {
        const { resolve, reject } = pendingRequests.get(data.id);
        pendingRequests.delete(data.id);
        if (data.error) {
          reject(data.error);
        } else {
          resolve(data.result);
        }
      }
    };

    ws.onerror = (err) => {
      console.error("WebSocket error:", err);
      chrome.kill();
      process.exit(1);
    };

  } catch (err) {
    console.error("Failed to connect or capture page:", err);
    chrome.kill();
    process.exit(1);
  }
}, 2500);
