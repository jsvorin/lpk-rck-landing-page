const fs = require('fs');

function replaceInFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/import React(, \{[^}]+\})? from 'react';/g, (match, p1) => {
    return p1 ? `import ${p1.trim()} from 'react';` : '';
  });
  content = content.replace(/from '\.\.\/ui\//g, "from '@/components/ui/");
  content = content.replace(/from '\.\.\/\.\.\/lib\//g, "from '@/lib/");
  content = content.replace(/from '\.\.\/\.\.\/contexts\//g, "from '@/contexts/");
  
  // also fix unused getIcon in ProgramsSection
  if (filePath.includes('ProgramsSection.tsx')) {
    content = content.replace(/const getIcon = \(iconName: string\) => {[\s\S]*?};\n\n/, '');
  }
  
  fs.writeFileSync(filePath, content);
}

const files = [
  'src/components/layout/Navbar.tsx', 
  'src/components/layout/Footer.tsx', 
  'src/components/layout/Section.tsx', 
  'src/components/ui/FloatingWhatsApp.tsx', 
  'src/components/ui/GeometricPattern.tsx', 
  'src/components/ui/WaveDivider.tsx', 
  'src/components/sections/HeroSection.tsx', 
  'src/components/sections/AboutSection.tsx', 
  'src/components/sections/ProgramsSection.tsx', 
  'src/components/sections/AdvantagesSection.tsx', 
  'src/components/sections/PricingSection.tsx', 
  'src/components/sections/GallerySection.tsx', 
  'src/components/sections/FAQSection.tsx', 
  'src/components/sections/ContactSection.tsx', 
  'src/App.tsx'
];

files.forEach(replaceInFile);
