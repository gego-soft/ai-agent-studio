# Deployment Troubleshooting Guide

## Issue: Build Succeeds, Deployment Fails

If your build completes successfully but deployment fails with authentication errors, follow these steps:

### 1. Verify Build Command in Cloudflare Dashboard

**Correct**: `npm run cf:build`  
**Wrong**: `npm run cf:deploy` or `npm run cf:preview`

**Safety Feature**: The `cf:deploy` script now includes a safety check that will prevent it from running in Cloudflare Pages build environment. If you accidentally use `cf:deploy` as your build command, it will fail early with a clear error message instead of causing authentication errors.

### 2. Verify Output Directory

In Cloudflare Pages dashboard:
- **Build output directory**: `.open-next/cloudflare`
- This should match the `pages_build_output_dir` in `wrangler.toml`

### 3. Check Build Output Structure

After running `npm run cf:build`, verify the output structure:

```bash
ls -la .open-next/cloudflare/
```

You should see files like:
- `init.js`
- `images.js`
- `cache-assets-manifest.sql`
- Other Cloudflare-specific files

### 4. Authentication Error Solutions

If you see:
```
✘ [ERROR] A request to the Cloudflare API failed.
Authentication error [code: 10000]
```

**This usually means:**

1. **Wrong Build Command**: You're using `cf:deploy` instead of `cf:build`
   - **Fix**: Change build command to `npm run cf:build` in Cloudflare Pages settings

2. **Cloudflare Pages Auto-Deployment**: Cloudflare Pages automatically deploys after build
   - You don't need to run `wrangler pages deploy` manually
   - The dashboard handles deployment automatically

3. **Wrangler.toml Detection**: Cloudflare Pages detects `wrangler.toml` but shouldn't run wrangler commands
   - Ensure `pages_build_output_dir` is set correctly
   - Cloudflare Pages will use this to find your build output

### 5. Manual Verification Steps

1. **Build locally**:
   ```bash
   npm run cf:build
   ```

2. **Check output exists**:
   ```bash
   ls -la .open-next/cloudflare/
   ```

3. **Verify in Cloudflare Dashboard**:
   - Go to your Pages project
   - Check Builds tab
   - Look at build logs
   - Verify build command is `npm run cf:build`
   - Verify output directory is `.open-next/cloudflare`

### 6. If Deployment Still Fails

1. **Check Cloudflare Pages Logs**:
   - Go to your project → Builds
   - Click on the failed build
   - Review the full error message

2. **Verify Environment Variables**:
   - Settings → Environment Variables
   - Ensure all required variables are set

3. **Check Node.js Version**:
   - Cloudflare Pages should use Node.js 18+ automatically
   - Verify in build logs

4. **Try Manual Upload** (temporary test):
   - Build locally: `npm run cf:build`
   - Zip the `.open-next/cloudflare` directory
   - Upload via Cloudflare Dashboard → Upload assets

### 7. Common Mistakes

❌ **Using `cf:deploy` as build command**  
✅ Use `cf:build` only

❌ **Setting output directory to `.open-next`**  
✅ Use `.open-next/cloudflare`

❌ **Running `wrangler pages deploy` in build**  
✅ Let Cloudflare Pages handle deployment automatically

## Still Having Issues?

1. Check [Cloudflare Pages Status](https://www.cloudflarestatus.com/)
2. Review [OpenNext Cloudflare Docs](https://opennext.js.org/cloudflare)
3. Check [Cloudflare Community Forums](https://community.cloudflare.com/)
