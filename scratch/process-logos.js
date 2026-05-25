const fs = require('fs');
const path = require('path');
const { Jimp } = require('jimp');

const files = ['muni-surqu.webp', 'sg-inmob.webp', 'textil-santa-ca.webp', 'g-e-m.png'];
const publicDir = 'c:\\Users\\BOne\\Documents\\Unimax-project\\Unimax_vercel-1\\public';

async function processImage(file) {
  const filePath = path.join(publicDir, file);
  if (!fs.existsSync(filePath)) {
    console.log(`[SKIP] ${file} does not exist`);
    return;
  }
  
  console.log(`[START] Processing ${file}...`);
  
  // Read using Jimp
  const image = await Jimp.read(filePath);
  const width = image.bitmap.width;
  const height = image.bitmap.height;
  
  console.log(`  Original size: ${width}x${height}`);
  
  // We will run a flood-fill algorithm starting from all border pixels.
  // We want to turn any pixel connected to the border that is white or near-white into transparent.
  const data = image.bitmap.data;
  const visited = new Uint8Array(width * height);
  const queue = [];
  
  // Initialize queue with all border pixels
  for (let x = 0; x < width; x++) {
    queue.push([x, 0]);
    queue.push([x, height - 1]);
  }
  for (let y = 1; y < height - 1; y++) {
    queue.push([0, y]);
    queue.push([width - 1, y]);
  }
  
  let clearedCount = 0;
  
  while (queue.length > 0) {
    const [cx, cy] = queue.shift();
    const idx = cy * width + cx;
    if (visited[idx]) continue;
    visited[idx] = 1;
    
    const pixelStart = idx * 4;
    const r = data[pixelStart];
    const g = data[pixelStart + 1];
    const b = data[pixelStart + 2];
    const a = data[pixelStart + 3];
    
    // Check if pixel is white/near-white (R > 230, G > 230, B > 230) or transparent (A < 50)
    // We also check for slightly greyish background pixels (since JPEG artifacts might make it slightly off-white)
    const isNearWhite = r > 225 && g > 225 && b > 225;
    const isTransparent = a < 50;
    
    if (isNearWhite || isTransparent) {
      // Set to fully transparent black
      data[pixelStart] = 0;
      data[pixelStart + 1] = 0;
      data[pixelStart + 2] = 0;
      data[pixelStart + 3] = 0;
      clearedCount++;
      
      // Add neighbors
      if (cx > 0) queue.push([cx - 1, cy]);
      if (cx < width - 1) queue.push([cx + 1, cy]);
      if (cy > 0) queue.push([cx, cy - 1]);
      if (cy < height - 1) queue.push([cx, cy + 1]);
    }
  }
  
  console.log(`  Cleared ${clearedCount} background pixels`);
  
  // Find bounding box of remaining non-transparent pixels
  let minX = width;
  let maxX = 0;
  let minY = height;
  let maxY = 0;
  let hasPixels = false;
  
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      const a = data[idx + 3];
      if (a > 10) { // Keep if alpha > 10
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
        hasPixels = true;
      }
    }
  }
  
  if (hasPixels) {
    // Add small padding (e.g. 6px) to avoid hard-cutting anti-aliasing edges
    const padding = 6;
    const cropX = Math.max(0, minX - padding);
    const cropY = Math.max(0, minY - padding);
    const cropW = Math.min(width - cropX, (maxX - minX) + padding * 2);
    const cropH = Math.min(height - cropY, (maxY - minY) + padding * 2);
    
    console.log(`  Cropping to bounding box: x=${cropX}, y=${cropY}, w=${cropW}, h=${cropH} (originally ${width}x${height})`);
    
    image.crop(cropX, cropY, cropW, cropH);
  } else {
    console.log(`  [WARNING] No active pixels found after transparency, skipping crop`);
  }
  
  // Write back to original file path (as WebP or PNG depending on original)
  // Let's create a backup first
  const backupPath = path.join(publicDir, file + '.bak');
  fs.copyFileSync(filePath, backupPath);
  console.log(`  Created backup at ${file}.bak`);
  
  await image.write(filePath);
  console.log(`  [SUCCESS] Wrote processed image back to ${file}`);
}

async function run() {
  for (const file of files) {
    try {
      await processImage(file);
    } catch (err) {
      console.error(`  [ERROR] Failed to process ${file}:`, err);
    }
  }
  console.log('[FINISHED] Logo processing complete!');
}

run();
