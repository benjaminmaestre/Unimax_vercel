const sharp = require('sharp');

async function inspect() {
  const file = 'c:\\Users\\BOne\\Documents\\Unimax-project\\Unimax_vercel-1\\public\\muni-surqu.webp';
  const rawData = await sharp(file).raw().toBuffer({ resolveWithObject: true });
  const { data, info } = rawData;
  console.log(`info:`, info);
  
  // Let's log some pixels from the corners and center
  console.log('Top-left pixel (0,0):', {
    r: data[0],
    g: data[1],
    b: data[2],
    a: data[3]
  });
  
  console.log('Top-middle pixel (width/2, 0):', {
    r: data[Math.floor(info.width / 2) * 4],
    g: data[Math.floor(info.width / 2) * 4 + 1],
    b: data[Math.floor(info.width / 2) * 4 + 2],
    a: data[Math.floor(info.width / 2) * 4 + 3]
  });
  
  // Find a pixel with transparency and one with content
  let transparentCount = 0;
  let opaqueCount = 0;
  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] === 0) transparentCount++;
    else opaqueCount++;
  }
  console.log(`Pixel stats: transparent=${transparentCount}, opaque=${opaqueCount}, total=${info.width * info.height}`);
}

inspect();
