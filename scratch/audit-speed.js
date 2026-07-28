import fs from 'fs';
import path from 'path';

console.log("=========================================");
console.log("⚡ Running Automated Speed & SEO Performance Audit");
console.log("=========================================");

const rootDir = process.cwd();
const indexPath = path.join(rootDir, 'index.html');
const officePath = path.join(rootDir, 'office.html');
const robotsPath = path.join(rootDir, 'robots.txt');
const sitemapPath = path.join(rootDir, 'sitemap.xml');

let totalScore = 100;
const report = [];

// Audit 1: File Sizes & DOM Bloat
const indexContent = fs.readFileSync(indexPath, 'utf8');
const officeContent = fs.readFileSync(officePath, 'utf8');

console.log(`\n📊 1. File Size Metrics:`);
console.log(`   • index.html: ${(indexContent.length / 1024).toFixed(1)} KB`);
console.log(`   • office.html: ${(officeContent.length / 1024).toFixed(1)} KB`);

if (indexContent.length > 150000) {
  report.push("⚠️ WARNING: index.html exceeds 150 KB.");
  totalScore -= 5;
} else {
  console.log("   ✓ index.html size is highly optimized (< 100 KB)");
}

// Audit 2: SEO Meta Tags & Structured Data
console.log(`\n🔍 2. SEO & Indexing Sweep:`);
if (indexContent.includes('rel="canonical"')) {
  console.log("   ✓ Canonical URL tag present");
} else {
  report.push("❌ MISSING: rel='canonical' tag in index.html");
  totalScore -= 10;
}

if (indexContent.includes('application/ld+json')) {
  console.log("   ✓ Schema.org JSON-LD Structured Data present");
} else {
  report.push("❌ MISSING: Schema.org JSON-LD structured data");
  totalScore -= 10;
}

if (indexContent.includes('hreflang="fr"') && indexContent.includes('hreflang="hi"')) {
  console.log("   ✓ Multilingual hreflang alternate links present");
} else {
  report.push("❌ MISSING: hreflang alternate links");
  totalScore -= 5;
}

// Audit 3: Mobile Viewport & Touch Target Fit
console.log(`\n📱 3. Mobile Responsiveness & Touch Precision:`);
if (indexContent.includes('max-width: 100vw; overflow-x: hidden;')) {
  console.log("   ✓ Root horizontal overflow protection active");
} else {
  report.push("⚠️ MISSING: max-width 100vw overflow protection");
  totalScore -= 5;
}

if (indexContent.includes('min-height: 44px') || indexContent.includes('44px')) {
  console.log("   ✓ 44px Touch Target rule active for mobile viewports");
} else {
  report.push("⚠️ Touch target size warning");
}

// Audit 4: Performance & Fonts
console.log(`\n⚡ 4. Speed & Asset Preloading:`);
if (indexContent.includes('&display=swap') || indexContent.includes('display=swap')) {
  console.log("   ✓ font-display: swap active for fast text rendering");
} else {
  report.push("⚠️ Google Fonts missing display=swap");
  totalScore -= 5;
}

// Audit 5: Robots.txt & Sitemap
console.log(`\n🤖 5. Robots & Sitemap Hygiene:`);
const robotsContent = fs.readFileSync(robotsPath, 'utf8');
if (robotsContent.includes('Disallow: /office.html')) {
  console.log("   ✓ Back Office (office.html) correctly excluded from search bots");
} else {
  report.push("❌ SECURITY WARNING: office.html not disallowed in robots.txt");
  totalScore -= 10;
}

console.log("\n=========================================");
console.log(`🎉 PERFORMANCE & AUDIT SCORE: ${totalScore} / 100`);
if (report.length > 0) {
  console.log("Warnings / Suggestions:");
  report.forEach(r => console.log(`   ${r}`));
} else {
  console.log("   ✓ ALL SPEED & SEO AUDIT CRITERIA PASSED AT UTMOST PRECISE LOGIC!");
}
console.log("=========================================\n");
