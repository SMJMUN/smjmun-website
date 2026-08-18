import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const imagesDir = path.join(process.cwd(), 'public', 'images');

async function processImages() {
  const files = fs.readdirSync(imagesDir);
  const targetFiles = files.filter(f => f.toLowerCase().includes('updated') || f.toLowerCase().includes('upadted'));

  let count = 0;
  for (const file of targetFiles) {
    if (file.endsWith('.webp')) {
      console.log(`Skipping already converted file: ${file}`);
      continue;
    }

    const inputPath = path.join(imagesDir, file);
    const ext = path.extname(file);
    const basename = path.basename(file, ext);
    const outputPath = path.join(imagesDir, `${basename}.webp`);

    console.log(`Processing: ${file}...`);
    try {
      let image = sharp(inputPath);
      const metadata = await image.metadata();

      if (metadata.width && metadata.width > 1920) {
        image = image.resize({ width: 1920, withoutEnlargement: true });
      }

      await image
        .webp({ quality: 80 })
        .toFile(outputPath);

      console.log(`✅ Converted: ${basename}.webp`);
      count++;
    } catch (error) {
      console.error(`❌ Failed to convert ${file}:`, error.message);
    }
  }
  console.log(`\n🎉 Finished converting ${count} images.`);
}

processImages();
