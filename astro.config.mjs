import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://yaremi18.github.io",
  vite: {
    resolve: {
      alias: {
        // Define un alias "@components" que apunta a la carpeta "src/components"
        "@*": "/src/*",
      },
    },
  },
});
