# Cloudflare Pages Setup Guide

## Issue Fixed

The build was failing because `cf:preview` was being used as the build command, which includes `wrangler dev` that's not suitable for Cloudflare Pages deployment.

## Correct Configuration for Cloudflare Pages

### Build Settings in Cloudflare Dashboard

When setting up your Cloudflare Pages project, use these settings:

1. **Framework preset**: None (or Next.js if available)
2. **Build command**: `npm run cf:build`
   - ⚠️ **DO NOT** use `npm run cf:preview` as the build command
   - `cf:preview` is only for local testing
3. **Build output directory**: `.open-next/cloudflare`
4. **Root directory**: `/` (leave empty)

### What Each Script Does

- `npm run cf:build` - Builds Next.js and adapts for Cloudflare (use this for Pages)
- `npm run cf:preview` - Builds + starts local dev server (for local testing only)
- `npm run cf:deploy` - Builds + deploys via CLI (for local machine only, includes safety check)
- `npm run cf:deploy:local` - Same as `cf:deploy` but without safety check (use if needed)

**Safety Feature**: `cf:deploy` includes a check that prevents it from running in Cloudflare Pages build environment, avoiding authentication errors.

## Step-by-Step Setup

1. **Go to Cloudflare Dashboard**
   - Navigate to [Workers & Pages](https://dash.cloudflare.com)
   - Click **Create a project** → **Pages** → **Connect to Git**

2. **Connect Repository**
   - Select your Git provider (GitHub, GitLab, etc.)
   - Authorize and select the repository

3. **Configure Build Settings**
   ```
   Framework preset: None
   Build command: npm run cf:build
   Build output directory: .open-next/cloudflare
   Root directory: / (or leave empty)
   Project name: ai-agent-studio (or your preferred name)
   ```

   **⚠️ CRITICAL**: 
   - Use ONLY `npm run cf:build` as the build command
   - DO NOT use `npm run cf:deploy` or `npm run cf:preview` as the build command
   - Cloudflare Pages will automatically deploy the output - no need for `wrangler pages deploy`
   - The `wrangler.toml` file includes `pages_build_output_dir` which Cloudflare Pages will automatically detect

4. **Environment Variables** (if needed)
   - Go to Settings → Environment Variables
   - Add any required variables (e.g., API keys)

5. **Deploy**
   - Click **Save and Deploy**
   - Wait for the build to complete

## Troubleshooting

### Authentication Error [code: 10000] - "A request to the Cloudflare API failed"

**Problem**: You're using `cf:deploy` or `cf:preview` as the build command, which tries to run `wrangler pages deploy` from within Cloudflare's build environment.

**Solution**: 
- ⚠️ **CRITICAL**: Use ONLY `npm run cf:build` as your build command in Cloudflare Pages dashboard
- Cloudflare Pages automatically deploys the output - you don't need to run `wrangler pages deploy` manually
- `cf:deploy` is only for CLI deployments from your local machine, not for Cloudflare Pages builds

### Build Fails with "Missing entry-point"

**Problem**: You're using `cf:preview` instead of `cf:build` as the build command.

**Solution**: Change the build command to `npm run cf:build` in Cloudflare Pages settings.

### Build Succeeds but Site Doesn't Load

**Problem**: Wrong output directory configured.

**Solution**: Ensure output directory is set to `.open-next/cloudflare` (not `.open-next` or `.next`)

### Local Preview Works but Deployment Fails

**Problem**: Environment differences or missing dependencies.

**Solution**: 
- Check Node.js version (should be 18+)
- Ensure all dependencies are in `package.json` (not just `devDependencies`)
- Check build logs for specific errors

## Local Testing

To test the Cloudflare build locally:

```bash
npm run cf:preview
```

This will:
1. Build your app
2. Start a local Wrangler Pages dev server
3. Open at `http://localhost:8788` (or the port shown)

## Additional Resources

- [OpenNext Cloudflare Docs](https://opennext.js.org/cloudflare)
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Wrangler CLI Docs](https://developers.cloudflare.com/workers/wrangler/)
