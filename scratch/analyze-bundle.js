const fs = require('fs');
const path = require('path');

const clientHtmlPath = path.join(__dirname, '..', '.next', 'analyze', 'client.html');
if (!fs.existsSync(clientHtmlPath)) {
  console.log('client.html not found!');
  process.exit(1);
}

const html = fs.readFileSync(clientHtmlPath, 'utf8');
const match = html.match(/window\.chartData = (\[.*?\]);/s);

if (!match) {
  console.log('chartData not found in client.html');
  process.exit(1);
}

const chartData = JSON.parse(match[1]);

function extractModules(node, path = '', allModules = []) {
  const currentPath = path ? `${path}/${node.label}` : node.label;
  if (node.groups) {
    for (const child of node.groups) {
      extractModules(child, currentPath, allModules);
    }
  } else {
    allModules.push({
      name: currentPath,
      size: node.statSize || node.parsedSize || 0
    });
  }
  return allModules;
}

let publicChunks = [];
let routeInitialJS = {};

for (const chunk of chartData) {
  // Ignore studio chunks
  if (chunk.label.includes('studio') || chunk.label.includes('sanity')) continue;

  const chunkSize = chunk.statSize || chunk.parsedSize || 0;
  publicChunks.push({
    label: chunk.label,
    size: chunkSize
  });

  // Check if it's a specific route chunk
  if (chunk.label.startsWith('static/chunks/app/') || chunk.label.startsWith('static/chunks/app/')) {
    let route = chunk.label.replace('static/chunks/app', '');
    route = route.split('/page-')[0] || '/';
    if (route === '') route = '/';
    routeInitialJS[route] = (routeInitialJS[route] || 0) + chunkSize;
  }
}

// Find largest chunks
publicChunks.sort((a, b) => b.size - a.size);

const sharedChunks = publicChunks.filter(c => c.label.includes('framework') || c.label.match(/static\/chunks\/\d{4}-/));
const pageChunks = publicChunks.filter(c => c.label.includes('/page-'));
const vendorChunks = publicChunks.filter(c => c.label.includes('node_modules'));

console.log('--- PUBLIC WEBSITE BUNDLE REPORT (Excluding /studio) ---\n');

console.log('INITIAL PAGE CHUNK SIZES (Page specific only, without shared/framework):');
['/', '/about', '/programs/[slug]', '/contact'].forEach(route => {
  const size = routeInitialJS[route] || 0;
  console.log(`${route}: ${(size / 1024).toFixed(2)} KB`);
});

console.log('\n--- LARGEST CHUNKS ---');
if (sharedChunks.length > 0) console.log(`Largest Shared Chunk: ${sharedChunks[0].label} (${(sharedChunks[0].size / 1024).toFixed(2)} KB)`);
if (pageChunks.length > 0) console.log(`Largest Page-Specific Chunk: ${pageChunks[0].label} (${(pageChunks[0].size / 1024).toFixed(2)} KB)`);

let appModules = [];
chartData.filter(chunk => !chunk.label.includes('studio')).forEach(chunk => {
  extractModules(chunk, '', appModules);
});

const vendorModules = appModules.filter(m => m.name.includes('node_modules') && !m.name.includes('sanity'));
vendorModules.sort((a, b) => b.size - a.size);
const appClientModules = appModules.filter(m => !m.name.includes('node_modules'));
appClientModules.sort((a, b) => b.size - a.size);

console.log(`\nLargest Vendor Module: ${vendorModules[0].name.split('node_modules/')[1].split('/')[0]} (${(vendorModules[0].size / 1024).toFixed(2)} KB)`);
console.log(`Largest Client Module: ${appClientModules[0].name.split('/').pop()} (${(appClientModules[0].size / 1024).toFixed(2)} KB)`);
