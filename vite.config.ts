// import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// export default defineConfig({
//   vite: {
//     base: "/french-excel-website/",
//   },

//   tanstackStart: {
//     server: { entry: "server" },

//     prerender: {
//       enabled: true,
//       autoSubfolderIndex: true,
//       autoStaticPathsDiscovery: true,
//       crawlLinks: true,
//       failOnError: true,
//     },
//   },
// });

import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
});
