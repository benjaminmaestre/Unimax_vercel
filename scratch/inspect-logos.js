const fs = require('fs');
const path = require('path');

const files = ['muni-surqu.webp', 'sg-inmob.webp', 'textil-santa-ca.webp', 'g-e-m.png'];
const publicDir = 'c:\\Users\\BOne\\Documents\\Unimax-project\\Unimax_vercel-1\\public';

files.forEach(file => {
  const filePath = path.join(publicDir, file);
  if (!fs.existsSync(filePath)) {
    console.log(`${file}: does not exist`);
    return;
  }
  const stats = fs.statSync(filePath);
  console.log(`${file}: ${stats.size} bytes`);
  
  // Read first few bytes to check format
  const buffer = fs.readFileSync(filePath);
  if (file.endsWith('.webp')) {
    // Check WebP format details
    const riff = buffer.toString('ascii', 0, 4);
    const webp = buffer.toString('ascii', 8, 12);
    const chunkHeader = buffer.toString('ascii', 12, 16);
    console.log(`  Format: RIFF=${riff}, WEBP=${webp}, ChunkHeader=${chunkHeader}`);
    if (chunkHeader === 'VP8X') {
      const flags = buffer[20];
      const hasAlpha = (flags & 0x10) !== 0;
      console.log(`  VP8X: flags=${flags.toString(2)}, hasAlpha=${hasAlpha}`);
    } else if (chunkHeader === 'VP8 ') {
      console.log(`  VP8: simple lossy (no alpha)`);
    } else if (chunkHeader === 'VP8L') {
      console.log(`  VP8L: lossless (may have alpha)`);
    }
  } else if (file.endsWith('.png')) {
    // Check PNG format details
    const pngHeader = buffer.toString('hex', 0, 8);
    console.log(`  Format: PNG header=${pngHeader}`);
    // Find IHDR chunk
    const ihdrLength = buffer.readUInt32BE(8);
    const colorType = buffer[25];
    console.log(`  IHDR: length=${ihdrLength}, colorType=${colorType} (6 = RGBA, 2 = RGB)`);
  }
});
