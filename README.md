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
2. Adapt it for Cloudflare Workers/Pages

#### Preview Locally

```bash
npm run cf:preview
```

This starts a local Wrangler dev server to preview your Cloudflare-optimized build.

#### Deploy to Cloudflare

```bash
npm run cf:deploy
```

This will deploy your application to Cloudflare Pages.

#### Manual Deployment via Cloudflare Dashboard

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to Workers & Pages
3. Create a new Pages project
4. Connect your Git repository
5. Set build command: `npm run cf:build`
6. Set output directory: `.open-next/cloudflare`
7. Deploy!

## Project Structure

- `app/` - Next.js App Router pages and layouts
- `components/` - React components
- `lib/` - Utility functions and mock data
- `types/` - TypeScript type definitions

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [OpenNext Cloudflare Documentation](https://opennext.js.org/cloudflare)
- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
