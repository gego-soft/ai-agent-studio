# ⚠️ IMPORTANT: Cloudflare Pages Build Command

## Correct Build Command

**Use ONLY this command in Cloudflare Pages dashboard:**

```
npm run cf:build
```

## ❌ DO NOT USE These Commands

- ❌ `npm run cf:deploy` - This tries to deploy from within Cloudflare's build environment and will fail with authentication errors
- ❌ `npm run cf:preview` - This starts a dev server, not suitable for production builds

## Why?

When you deploy via Cloudflare Pages dashboard:

1. Cloudflare runs your build command (`npm run cf:build`)
2. Cloudflare automatically detects the output directory (from `wrangler.toml` or dashboard settings)
3. Cloudflare automatically deploys the output - **you don't need to run `wrangler pages deploy`**

The `cf:deploy` script is only for deploying from your **local machine** using the CLI, not for Cloudflare Pages builds.

## If You See Authentication Errors

If you see errors like:
```
✘ [ERROR] A request to the Cloudflare API failed.
Authentication error [code: 10000]
```

This means you're using `cf:deploy` or `cf:preview` as your build command. Change it to `npm run cf:build` in your Cloudflare Pages project settings.
