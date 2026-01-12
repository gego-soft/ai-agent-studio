#!/usr/bin/env node

/**
 * Check if running in Cloudflare Pages build environment
 * Prevents running wrangler deploy commands in CI/CD
 */

const isCloudflarePages = process.env.CF_PAGES === '1' || 
                         process.env.CF_PAGES_BRANCH !== undefined ||
                         process.env.CI === 'true' && process.env.CF_PAGES_URL !== undefined;

if (isCloudflarePages) {
  console.error('❌ ERROR: Cannot run wrangler pages deploy in Cloudflare Pages build environment.');
  console.error('');
  console.error('Cloudflare Pages automatically deploys your build output.');
  console.error('Your build command should be: npm run cf:build');
  console.error('Do NOT use: npm run cf:deploy or npm run cf:preview');
  console.error('');
  console.error('If you need to deploy manually, use: npm run cf:deploy:local');
  process.exit(1);
}

console.log('✓ Not in Cloudflare Pages environment. Proceeding with deployment...');
