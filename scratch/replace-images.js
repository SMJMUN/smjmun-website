const fs = require('fs');
const path = require('path');

const targetImages = [
    'founder.png',
    'hero-2.png',
    'hero-3.png',
    'logo-8.png',
    'photo.jpg',
    'Property 1=Variant4.png',
    'smg-mun-logo.png',
    'smjmunlogo-8.png',
    'training.png',
    'ChatGPT Image Jun 18, 2026, 12_56_11 AM.png'
];

const dirPath = path.join(__dirname, '../app');

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

async function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            await processDirectory(fullPath);
        } else if (stat.isFile() && /\.(tsx|ts|js|jsx|css)$/.test(fullPath)) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;

            for (const img of targetImages) {
                const webpImg = img.substring(0, img.lastIndexOf('.')) + '.webp';
                // replace all occurrences of img with webpImg
                const regex = new RegExp(escapeRegExp(img), 'g');
                if (regex.test(content)) {
                    content = content.replace(regex, webpImg);
                    modified = true;
                    console.log(`Replaced ${img} with ${webpImg} in ${fullPath}`);
                }
            }

            if (modified) {
                fs.writeFileSync(fullPath, content, 'utf8');
            }
        }
    }
}

processDirectory(dirPath).then(() => console.log('Replacement Done'));
