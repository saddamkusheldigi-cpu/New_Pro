/**
 * Script to verify Facebook domain verification meta tag is present in HTML
 * 
 * Usage:
 * 1. Start your Next.js dev server: npm run dev
 * 2. In another terminal, run: node verify-meta-tag.js
 * 
 * Or after deployment, update the URL in this script and run it
 */

const http = require('http');
const https = require('https');

const url = process.argv[2] || 'http://localhost:3000';
const metaTagContent = '738070f15fxl5ch0v206jueta0560z';

const client = url.startsWith('https') ? https : http;

console.log(`🔍 Checking for Facebook domain verification meta tag...`);
console.log(`📍 URL: ${url}\n`);

client.get(url, (res) => {
  let html = '';

  res.on('data', (chunk) => {
    html += chunk;
  });

  res.on('end', () => {
    // Check for the meta tag
    const metaTagPattern = /<meta\s+name=["']facebook-domain-verification["']\s+content=["']([^"']+)["']\s*\/?>/i;
    const match = html.match(metaTagPattern);

    if (match) {
      console.log('✅ SUCCESS: Meta tag found!');
      console.log(`   Content: ${match[1]}`);
      
      if (match[1] === metaTagContent) {
        console.log('✅ Content matches expected value');
      } else {
        console.log(`⚠️  Warning: Content doesn't match. Expected: ${metaTagContent}`);
      }

      // Check if it's in the <head> section
      const headEndIndex = html.indexOf('</head>');
      const metaTagIndex = html.indexOf(match[0]);
      
      if (headEndIndex !== -1 && metaTagIndex < headEndIndex) {
        console.log('✅ Meta tag is correctly placed in <head> section');
      } else {
        console.log('⚠️  Warning: Meta tag might not be in <head> section');
      }
    } else {
      console.log('❌ ERROR: Meta tag NOT found in HTML');
      console.log('\nTroubleshooting:');
      console.log('1. Make sure your Next.js server is running');
      console.log('2. Check if the meta tag is in src/app/layout.tsx');
      console.log('3. In Next.js App Router, manually adding <head> tags might not work');
      console.log('4. Try restarting your dev server');
    }

    // Show first 2000 characters of head section for debugging
    const headStartIndex = html.indexOf('<head>');
    const headEndIndex = html.indexOf('</head>');
    if (headStartIndex !== -1 && headEndIndex !== -1) {
      const headSection = html.substring(headStartIndex, Math.min(headStartIndex + 2000, headEndIndex));
      console.log('\n📄 First part of <head> section:');
      console.log('─'.repeat(50));
      console.log(headSection);
      console.log('─'.repeat(50));
    }
  });
}).on('error', (err) => {
  console.error(`❌ Error fetching ${url}:`, err.message);
  console.log('\nMake sure:');
  console.log('1. Your Next.js dev server is running (npm run dev)');
  console.log('2. The URL is correct');
});

