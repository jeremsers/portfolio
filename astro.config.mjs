import { defineConfig } from 'astro/config';

import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: vercel({
    speedInsights: {
      enabled: true,
    },
  
    }),
    vite: {
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: ` 
              @use "./src/assets/style/utils.scss" as *;
            `,
          },
        },
      },
    },
});
console.log(
  process.env.VERCEL_ANALYTICS_ID,
  process.env.PUBLIC_VERCEL_ANALYTICS_ID,
);
if (!process.env.VERCEL_ANALYTICS_ID) {
  process.env.VERCEL_ANALYTICS_ID = process.env.PUBLIC_VERCEL_ANALYTICS_ID;
}