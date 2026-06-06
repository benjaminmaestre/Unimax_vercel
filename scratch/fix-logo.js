const Jimp = require('jimp');

async function fix() {
  try {
    const logo = await Jimp.read('public/logo_unimx-removebg-preview.png');
    logo.scaleToFit(800, 400);

    const bg = new Jimp(1200, 630, 0x0a0f14ff);
    
    const x = (1200 - logo.bitmap.width) / 2;
    const y = (630 - logo.bitmap.height) / 2;

    bg.composite(logo, x, y);
    await bg.writeAsync('public/og-logo-dark.png');
    console.log('Successfully generated og-logo-dark.png');
  } catch(e) {
    console.error(e);
  }
}
fix();
