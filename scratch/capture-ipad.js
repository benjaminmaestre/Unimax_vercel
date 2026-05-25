const { spawn } = require('child_process');
const fs = require('fs');

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const outputDir = "C:/Users/BOne/.gemini/antigravity-ide/brain/eac7515e-eb79-41b3-8d22-785454c8e49f";
const targetUrl = "http://localhost:3000";

// iPad viewports to test
const viewports = [
  { name: "ipad_portrait", width: 820, height: 1180 },    // iPad Air portrait
  { name: "ipad_landscape", width: 1180, height: 820 },   // iPad Air landscape
  { name: "ipad_pro_portrait", width: 1024, height: 1366 }, // iPad Pro 12.9 portrait
];

async function captureViewport(viewport) {
  return new Promise((resolve, reject) => {
    const outputPath = `${outputDir}/${viewport.name}.png`;
    console.log(`\n=== Capturing ${viewport.name} (${viewport.width}x${viewport.height}) ===`);
    
    const chrome = spawn(chromePath, [
      "--headless=old",
      "--remote-debugging-port=9223",
      "--disable-gpu",
      `--window-size=${viewport.width},${viewport.height}`,
      targetUrl
    ]);

    chrome.on('error', (err) => {
      console.error("Chrome failed:", err);
      reject(err);
    });

    setTimeout(async () => {
      try {
        const res = await fetch("http://127.0.0.1:9223/json");
        const targets = await res.json();
        const pageTarget = targets.find(t => t.type === 'page');
        if (!pageTarget) throw new Error("No page target!");

        const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);
        let msgId = 1;
        const pending = new Map();

        function send(method, params = {}) {
          const id = msgId++;
          ws.send(JSON.stringify({ id, method, params }));
          return new Promise((res, rej) => pending.set(id, { resolve: res, reject: rej }));
        }

        ws.onmessage = (event) => {
          const data = JSON.parse(event.data);
          if (data.id && pending.has(data.id)) {
            const { resolve, reject } = pending.get(data.id);
            pending.delete(data.id);
            data.error ? reject(data.error) : resolve(data.result);
          }
        };

        ws.onopen = async () => {
          try {
            await send("Page.enable");
            await send("Runtime.enable");

            // Set exact device metrics for viewport emulation
            await send("Emulation.setDeviceMetricsOverride", {
              width: viewport.width,
              height: viewport.height,
              deviceScaleFactor: 2,
              mobile: true
            });

            // Scroll the page to trigger Framer Motion animations
            const scrollExpr = `
              new Promise(resolve => {
                let total = document.body.scrollHeight;
                let current = 0;
                let step = 400;
                let interval = setInterval(() => {
                  window.scrollBy(0, step);
                  current += step;
                  if (current >= total || current >= 12000) {
                    clearInterval(interval);
                    window.scrollTo(0, 0);
                    setTimeout(() => resolve(total), 600);
                  }
                }, 60);
              })
            `;
            await send("Runtime.evaluate", { expression: scrollExpr, awaitPromise: true });

            // Capture full page
            const result = await send("Page.captureScreenshot", {
              format: "png",
              captureBeyondViewport: true
            });

            fs.writeFileSync(outputPath, Buffer.from(result.data, 'base64'));
            console.log(`Saved: ${outputPath}`);

            ws.close();
            chrome.kill();
            resolve();
          } catch (err) {
            console.error("Error:", err);
            ws.close();
            chrome.kill();
            reject(err);
          }
        };

        ws.onerror = (err) => {
          chrome.kill();
          reject(err);
        };
      } catch (err) {
        chrome.kill();
        reject(err);
      }
    }, 3000);
  });
}

(async () => {
  for (const vp of viewports) {
    try {
      await captureViewport(vp);
    } catch (err) {
      console.error(`Failed: ${vp.name}`, err);
    }
    // Wait between captures to free port
    await new Promise(r => setTimeout(r, 2000));
  }
  console.log("\nAll iPad captures complete!");
  process.exit(0);
})();
