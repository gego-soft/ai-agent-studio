# Cloudflare Deployment Guide

This project is configured to deploy to Cloudflare Pages/Workers using OpenNext Cloudflare adapter.

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Build for Cloudflare

```bash
npm run cf:build
```

This creates the optimized build in `.open-next/cloudflare/` directory.

### 3. Preview Locally

```bash
npm run cf:preview
```

This starts a local Wrangler dev server.

### 4. Deploy

#### Option A: Using CLI

```bash
npm run cf:deploy
```

#### Option B: Using Cloudflare Dashboard

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to **Workers & Pages**
3. Click **Create a project** → **Pages** → **Connect to Git**
4. Select your repository
5. Configure build settings:
   - **Build command**: `npm run cf:build`
   - **Build output directory**: `.open-next/cloudflare`
   - **Root directory**: `/` (or your project root)
6. Click **Save and Deploy**

## Configuration Files

- `wrangler.toml` - Cloudflare Workers/Pages configuration
- `open-next.config.ts` - OpenNext Cloudflare adapter configuration

## Environment Variables

Set environment variables in Cloudflare Dashboard:
1. Go to your Pages project
2. Navigate to **Settings** → **Environment Variables**
3. Add your variables (e.g., API keys, database URLs)

## Production Considerations

For production deployments, consider:

1. **R2 Storage for Cache**: Configure R2 bucket for incremental cache in `open-next.config.ts`
2. **Custom Domain**: Add your custom domain in Cloudflare Pages settings
3. **Environment Variables**: Set production environment variables
4. **Build Optimization**: The build process optimizes for Cloudflare's edge runtime

## Troubleshooting

- If build fails, ensure Node.js version matches Cloudflare's requirements
- Check `wrangler.toml` for correct compatibility flags
- Review Cloudflare Pages build logs for detailed error messages

## Resources

- [OpenNext Cloudflare Documentation](https://opennext.js.org/cloudflare)
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Wrangler CLI Documentation](https://developers.cloudflare.com/workers/wrangler/)
