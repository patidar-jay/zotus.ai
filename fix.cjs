const fs = require('fs');

function replaceInFile(filePath, replacements) {
    let content = fs.readFileSync(filePath, 'utf8');
    for (const [target, replacement] of replacements) {
        content = content.replace(target, replacement);
    }
    fs.writeFileSync(filePath, content, 'utf8');
}

replaceInFile('src/components/layout/Footer.tsx', [
    ["import Logo from './Logo';\n", ""]
]);

replaceInFile('src/components/sections/ContactSection.tsx', [
    ["import { fadeInUp, fadeInLeft, fadeInRight } from '../../animations/variants';", "import { fadeInLeft, fadeInRight } from '../../animations/variants';"]
]);

replaceInFile('src/components/sections/ProcessSection.tsx', [
    ["processSteps.map((step, index) => {", "processSteps.map((step) => {"]
]);

replaceInFile('src/pages/BlogPage.tsx', [
    ["import { FileText, Clock, ArrowRight } from 'lucide-react';", "import { FileText, Clock } from 'lucide-react';"],
    ["import { Link } from 'react-router-dom';\n", ""],
    ["import { Container, SectionHeading } from '../components/ui';", "import { Container } from '../components/ui';"]
]);

replaceInFile('src/pages/CaseStudiesPage.tsx', [
    ["import { ArrowRight } from 'lucide-react';\n", ""]
]);

replaceInFile('src/pages/ContactPage.tsx', [
    ["import { ContactSection, CTASection } from '../components/sections';", "import { ContactSection } from '../components/sections';"]
]);

replaceInFile('src/pages/IndustriesPage.tsx', [
    ["import { Container, SectionHeading } from '../components/ui';", "import { Container } from '../components/ui';"]
]);

replaceInFile('src/pages/ServicesPage.tsx', [
    ["import { ArrowRight } from 'lucide-react';\n", ""],
    ["import { Link } from 'react-router-dom';\n", ""],
    ["import { Container, SectionHeading, Button } from '../components/ui';", "import { Container } from '../components/ui';"],
    ["{services.map((service, i) => {", "{services.map((service) => {"]
]);

let viteConfig = fs.readFileSync('vite.config.ts', 'utf8');
viteConfig = viteConfig.replace(/  build: \{\s*rollupOptions: \{\s*output: \{\s*manualChunks: \{\s*vendor: \['react', 'react-dom', 'react-router-dom'\],\s*motion: \['framer-motion'\],\s*\},\s*\},\s*\},\s*\},\s*/, '');
fs.writeFileSync('vite.config.ts', viteConfig, 'utf8');
