const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dirPath = path.join(__dirname, '../public');

async function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            await processDirectory(fullPath);
        } else if (stat.size > 300 * 1024) {
            const ext = path.extname(fullPath).toLowerCase();
            if (['.png', '.jpg', '.jpeg'].includes(ext)) {
                const newPath = fullPath.substring(0, fullPath.lastIndexOf('.')) + '.webp';
                console.log(`Converting ${fullPath} to ${newPath}`);
                try {
                    await sharp(fullPath).webp({ quality: 80 }).toFile(newPath);
                    console.log(`Success: ${newPath}`);
                } catch (err) {
                    console.error(`Error converting ${fullPath}:`, err);
                }
            }
        }
    }
}

processDirectory(dirPath).then(() => console.log('Done'));
