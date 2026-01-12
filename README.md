# AI Agent Studio

Task-driven AI agent platform for clinical documentation and communication inside an EMR.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

### Cloudflare Pages/Workers

This project is configured to deploy to Cloudflare using OpenNext Cloudflare adapter.

#### Prerequisites

1. Install Wrangler CLI (if not already installed):
   ```bash
   npm install -g wrangler
   ```

2. Authenticate with Cloudflare:
   ```bash
   npx wrangler login
   ```

#### Build for Cloudflare

```bash
npm run cf:build
```

This will:
1. Build your Next.js application
2. Adapt it for Cloudflare Pages

#### Preview Locally

```bash
npm run cf:preview
```

This starts a local Wrangler Pages dev server to preview your Cloudflare-optimized build.

#### Deploy to Cloudflare

**Option A: Using CLI (from your local machine)**
```bash
npm run cf:deploy
```
⚠️ **Note**: This will fail if run in Cloudflare Pages build environment. Use `cf:build` for dashboard deployments.

**Option B: Using Cloudflare Dashboard (Recommended)**

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to **Workers & Pages**
3. Click **Create a project** → **Pages** → **Connect to Git**
4. Select your repository
5. Configure build settings:
   - **Framework preset**: None (or Next.js if available)
   - **Build command**: `npm run cf:build`
   - **Build output directory**: `.open-next/cloudflare`
   - **Root directory**: `/` (leave empty or use `/`)
6. Click **Save and Deploy**

**⚠️ CRITICAL**: 
- Use ONLY `npm run cf:build` as your build command in Cloudflare Pages dashboard
- DO NOT use `npm run cf:deploy` or `npm run cf:preview` as the build command
- Cloudflare Pages automatically deploys the output - you don't need to run `wrangler pages deploy` manually
- `cf:deploy` is only for CLI deployments from your local machine and will fail if accidentally used in Cloudflare Pages build environment

## Project Structure

- `app/` - Next.js App Router pages and layouts
- `components/` - React components
- `lib/` - Utility functions and mock data
- `types/` - TypeScript type definitions

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [OpenNext Cloudflare Documentation](https://opennext.js.org/cloudflare)
- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
