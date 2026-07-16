const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const rootDir = 'C:\\Users\\samxp\\mun';
const imagesDir = path.join(rootDir, 'public', 'images');

const files = [
  "vit-logo-2.png",
  "treecolour-4.png",
  "tree-colour-5.png",
  "ceremony-3.png",
  "program-image-3.png",
  "program-image-2.png",
  "program-image-1.png",
  "ceremony-1.png",
  "partnerships-image.png",
  "treecolour.png",
  "hero-1.png",
  "institution.png",
  "SHCOOL-PHOTO-1.png",
  "SHCOOL-PHOTO.png",
  "strategic-partner.png",
  "treecolour-2.png",
  "treecolour-3.png",
  "ceremony-2.png",
  "ceremony-4.png"
];

async function processImages() {
  for (const file of files) {
    const ext = path.extname(file);
    const basename = path.basename(file, ext);
    const inPath = path.join(imagesDir, file);
    const outPath = path.join(imagesDir, `${basename}.webp`);
    
    if (fs.existsSync(inPath)) {
      try {
        await sharp(inPath)
          .webp({ quality: 80 })
          .toFile(outPath);
        console.log(`Compressed: ${file} -> ${basename}.webp`);
      } catch (err) {
        console.error(`Failed to compress ${file}:`, err);
      }
    } else {
      console.log(`File not found: ${inPath}`);
    }
  }
}

processImages();
