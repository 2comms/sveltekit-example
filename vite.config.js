import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  define: {
    'import.meta.env.ANALYTICS_ID': JSON.stringify(process.env.ANALYTICS_ID)
  }
};

export default config;
