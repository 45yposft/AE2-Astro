// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  //site: "urlcanonica", 
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  }

});
