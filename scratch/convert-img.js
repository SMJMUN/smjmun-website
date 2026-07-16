const fs = require('fs');
const path = require('path');

const filesToProcess = [
    'app/partnerships/school-partnerships/page.tsx',
    'app/partnerships/page.tsx',
    'app/components/EditorialStatement.tsx',
    'app/components/Footer.tsx',
    'app/components/InstitutionServices.tsx',
    'app/components/MediaSection.tsx',
    'app/components/LeadershipJourney.tsx',
    'app/components/FounderSection.tsx',
    'app/components/CTASection.tsx',
    'app/components/ConferencesSection.tsx',
    'app/components/AboutSection.tsx'
];

for (const relPath of filesToProcess) {
    const fullPath = path.join(__dirname, '..', relPath);
    if (!fs.existsSync(fullPath)) continue;

    let content = fs.readFileSync(fullPath, 'utf8');
    
    if (!content.includes('<img')) continue;

    // Add import if missing
    if (!content.includes("import Image from")) {
        const importStatement = "import Image from 'next/image';\n";
        if (content.includes("'use client'") || content.includes('"use client"')) {
            content = content.replace(/("use client"|'use client');?\s*/, "$&\n" + importStatement);
        } else {
            content = importStatement + content;
        }
    }

    // Replace <img> with <Image fill /> for most files. 
    // We'll use a regex that matches <img ... /> and replaces it.
    // For Footer logo, it has className="w-20 opacity-60", let's give it explicit width/height
    
    content = content.replace(/<img([\s\S]*?)\/>/g, (match, attrs) => {
        // If it's the logo in footer
        if (attrs.includes('smg-mun-logo')) {
            return `<Image${attrs} width={80} height={80} />`;
        }
        // If it has style={{ width: '100%', height: '100%' }} or className with h-full w-full
        if (attrs.includes('100%') || attrs.includes('full') || attrs.includes('width: "100%"')) {
            return `<Image${attrs} fill sizes="(max-width: 768px) 100vw, 50vw" />`;
        }
        
        // Default fallback (fill)
        return `<Image${attrs} fill sizes="(max-width: 768px) 100vw, 50vw" />`;
    });

    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`Processed ${relPath}`);
}
