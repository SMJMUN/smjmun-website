const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function compressImages() {
  const publicDir = path.join(__dirname, 'public', 'images');

  try {
    // 1. ceremony-4-mobile.webp
    console.log('Optimizing ceremony-4.webp...');
    await sharp(path.join(publicDir, 'ceremony-4.webp'))
      .resize({ width: 768 })
      .webp({ quality: 75 })
      .toFile(path.join(publicDir, 'ceremony-4-mobile.webp'));
    console.log('Created ceremony-4-mobile.webp');

    // 2. community.jpeg -> community.webp
    console.log('Optimizing community.jpeg...');
    await sharp(path.join(publicDir, 'community.jpeg'))
      .webp({ quality: 80 })
      .toFile(path.join(publicDir, 'community.webp'));
    console.log('Created community.webp');

    // 3. smj-hero-6.jpeg -> smj-hero-6.webp
    console.log('Optimizing smj-hero-6.jpeg...');
    await sharp(path.join(publicDir, 'smj-hero-6.jpeg'))
      .webp({ quality: 80 })
      .toFile(path.join(publicDir, 'smj-hero-6.webp'));
    console.log('Created smj-hero-6.webp');

    console.log('Image compression complete!');
  } catch (error) {
    console.error('Error compressing images:', error);
  }
}

compressImages();
