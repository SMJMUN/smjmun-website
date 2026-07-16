const fs = require('fs');
const path = require('path');

const rootDir = 'C:\\Users\\samxp\\mun';
const dirs = ['app', 'components', 'data'];

const filesToReplace = [
  "vit-logo-2",
  "treecolour-4",
  "tree-colour-5",
  "ceremony-3",
  "program-image-3",
  "program-image-2",
  "program-image-1",
  "ceremony-1",
  "partnerships-image",
  "treecolour",
  "hero-1",
  "institution",
  "SHCOOL-PHOTO-1",
  "SHCOOL-PHOTO",
  "strategic-partner",
  "treecolour-2",
  "treecolour-3",
  "ceremony-2",
  "ceremony-4"
];

function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      processDirectory(fullPath);
    } else if (entry.isFile() && /\.(tsx|ts|js|jsx|css|json)$/.test(entry.name)) {
      let content = fs.readFileSync(fullPath, 'utf-8');
      let changed = false;

      for (const name of filesToReplace) {
        // Regex to match the filename followed by .png or .jpeg or .jpg
        const regex = new RegExp(`(${name})\\.(png|jpeg|jpg)`, 'gi');
        if (regex.test(content)) {
          content = content.replace(regex, `$1.webp`);
          changed = true;
        }
      }

      if (changed) {
        fs.writeFileSync(fullPath, content, 'utf-8');
        console.log(`Updated references in: ${fullPath}`);
      }
    }
  }
}

for (const dir of dirs) {
  processDirectory(path.join(rootDir, dir));
}

console.log("Done updating references.");
