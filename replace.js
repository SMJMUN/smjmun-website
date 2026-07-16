const fs = require('fs');
const path = require('path');

function replaceInDir(dir, searchRegex, replaceStr) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath, searchRegex, replaceStr);
    } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx') || fullPath.endsWith('.js')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      if (searchRegex.test(content)) {
        const newContent = content.replace(searchRegex, replaceStr);
        fs.writeFileSync(fullPath, newContent, 'utf8');
        console.log('Updated', fullPath);
      }
    }
  }
}

replaceInDir(path.join(__dirname, 'app'), /community\.jpeg/g, 'community.webp');
replaceInDir(path.join(__dirname, 'components'), /community\.jpeg/g, 'community.webp');
replaceInDir(path.join(__dirname, 'data'), /community\.jpeg/g, 'community.webp');

replaceInDir(path.join(__dirname, 'app'), /smj-hero-6\.jpeg/g, 'smj-hero-6.webp');
replaceInDir(path.join(__dirname, 'components'), /smj-hero-6\.jpeg/g, 'smj-hero-6.webp');
replaceInDir(path.join(__dirname, 'data'), /smj-hero-6\.jpeg/g, 'smj-hero-6.webp');

// Replace smg-mun-logo.png with SMJMUNLOGOFILE.png
replaceInDir(path.join(__dirname, 'app'), /smg-mun-logo\.png/g, 'SMJMUNLOGOFILE.png');
replaceInDir(path.join(__dirname, 'components'), /smg-mun-logo\.png/g, 'SMJMUNLOGOFILE.png');
const swPath = path.join(__dirname, 'public', 'sw.js');
if (fs.existsSync(swPath)) {
  let swContent = fs.readFileSync(swPath, 'utf8');
  if (swContent.includes('smg-mun-logo.png')) {
    swContent = swContent.replace(/smg-mun-logo\.png/g, 'SMJMUNLOGOFILE.png');
    fs.writeFileSync(swPath, swContent, 'utf8');
    console.log('Updated', swPath);
  }
}

console.log('Done replacing references.');
