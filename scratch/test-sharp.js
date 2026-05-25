try {
  const sharp = require('sharp');
  console.log("Sharp loaded successfully! Version:", sharp.versions);
} catch (err) {
  console.error("Error loading Sharp:", err);
}
