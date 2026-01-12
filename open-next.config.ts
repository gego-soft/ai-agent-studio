import { defineCloudflareConfig } from "@opennextjs/cloudflare/config";

export default defineCloudflareConfig({
  // Cloudflare-specific configuration options
  // See https://opennext.js.org/cloudflare for more details
  // For production, you may want to configure R2 for incremental cache:
  // incrementalCache: r2IncrementalCache,
});
