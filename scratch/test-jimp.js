try {
  const Jimp = require('jimp');
  console.log("Jimp loaded successfully:", Object.keys(Jimp));
} catch (err) {
  console.error("Error loading Jimp:", err);
}
