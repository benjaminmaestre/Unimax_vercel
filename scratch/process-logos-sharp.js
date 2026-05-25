const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Disable Sharp cache to prevent file locking on Windows
sharp.cache(false);

const files = ['muni-surqu.webp', 'sg-inmob.webp', 'textil-santa-ca.webp', 'g-e-m.png'];
const publicDir = 'c:\\Users\\BOne\\Documents\\Unimax-project\\Unimax_vercel-1\\public';

async function processImage(file) {
  const filePath = path.join(publicDir, file);
  if (!fs.existsSync(filePath)) {
    console.log(`[SKIP] ${file} does not exist`);
    return;
  }
  
  console.log(`[START] Processing ${file} with High-Performance Sharp...`);
  
  // 1. Load image and ensure it has an alpha channel, get raw pixels
  const rawData = await sharp(filePath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
    
  const { data, info } = rawData;
  const { width, height } = info;
  console.log(`  Dimensions: ${width}x${height}`);
  
  // 2. High-Performance Flood Fill to clear white/near-white backgrounds
  const visited = new Uint8Array(width * height);
  const queue = new Int32Array(width * height * 2);
  let head = 0;
  let tail = 0;
  
  // Add all boundary pixels to the queue
  for (let x = 0; x < width; x++) {
    let idx = 0 * width + x;
    if (!visited[idx]) { visited[idx] = 1; queue[tail++] = idx; }
    idx = (height - 1) * width + x;
    if (!visited[idx]) { visited[idx] = 1; queue[tail++] = idx; }
  }
  for (let y = 1; y < height - 1; y++) {
    let idx = y * width + 0;
    if (!visited[idx]) { visited[idx] = 1; queue[tail++] = idx; }
    idx = y * width + (width - 1);
    if (!visited[idx]) { visited[idx] = 1; queue[tail++] = idx; }
  }
  
  let clearedCount = 0;
  
  while (head < tail) {
    const idx = queue[head++];
    
    const pixelStart = idx * 4;
    const r = data[pixelStart];
    const g = data[pixelStart + 1];
    const b = data[pixelStart + 2];
    const a = data[pixelStart + 3];
    
    const isNearWhite = r > 220 && g > 220 && b > 220;
    const isTransparent = a < 60;
    
    if (isNearWhite || isTransparent) {
      data[pixelStart] = 0;
      data[pixelStart + 1] = 0;
      data[pixelStart + 2] = 0;
      data[pixelStart + 3] = 0;
      clearedCount++;
      
      const cx = idx % width;
      const cy = Math.floor(idx / width);
      
      if (cx > 0) {
        const nIdx = idx - 1;
        if (!visited[nIdx]) { visited[nIdx] = 1; queue[tail++] = nIdx; }
      }
      if (cx < width - 1) {
        const nIdx = idx + 1;
        if (!visited[nIdx]) { visited[nIdx] = 1; queue[tail++] = nIdx; }
      }
      if (cy > 0) {
        const nIdx = idx - width;
        if (!visited[nIdx]) { visited[nIdx] = 1; queue[tail++] = nIdx; }
      }
      if (cy < height - 1) {
        const nIdx = idx + width;
        if (!visited[nIdx]) { visited[nIdx] = 1; queue[tail++] = nIdx; }
      }
    }
  }
  
  console.log(`  Cleared ${clearedCount} background pixels to transparency`);
  
  // 3. Load the modified raw buffer back into sharp
  let img = sharp(data, {
    raw: {
      width,
      height,
      channels: 4
    }
  });
  
  // 4. Trim all transparent padding around the logo
  img = img.trim({
    background: { r: 0, g: 0, b: 0, alpha: 0 },
    threshold: 10
  });
  
  // 5. Add a clean 8px padding around it to give it some breathing room
  const padding = 8;
  img = img.extend({
    top: padding,
    bottom: padding,
    left: padding,
    right: padding,
    background: { r: 0, g: 0, b: 0, alpha: 0 }
  });
  
  // 6. Backup original file
  const backupPath = path.join(publicDir, file + '.bak');
  if (!fs.existsSync(backupPath)) {
    fs.copyFileSync(filePath, backupPath);
    console.log(`  Backup created at ${file}.bak`);
  }
  
  // 7. Write processed image back to buffer
  let outputBuffer;
  if (file.endsWith('.webp')) {
    outputBuffer = await img.webp({ lossless: true }).toBuffer();
  } else {
    outputBuffer = await img.png().toBuffer();
  }
  
  // Save directly to the destination with retry logic for file locks
  let attempts = 5;
  while (attempts > 0) {
    try {
      fs.writeFileSync(filePath, outputBuffer);
      console.log(`  [SUCCESS] Wrote processed image back to ${file}`);
      break;
    } catch (err) {
      console.log(`  [LOCK] File ${file} is locked, retrying in 500ms... (Attempts left: ${attempts})`);
      attempts--;
      if (attempts === 0) throw err;
      await new Promise(r => setTimeout(r, 500));
    }
  }
}

async function run() {
  for (const file of files) {
    try {
      await processImage(file);
    } catch (err) {
      console.error(`  [ERROR] Failed to process ${file}:`, err);
    }
  }
  console.log('[FINISHED] Sharp image processing completed!');
}

run();
