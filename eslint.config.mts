import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    languageOptions: {
      globals: { ...globals.node }, // <-- Node-globals (process, __dirname, etc.)
    },
    plugins: { js },
    extends: ['js/recommended'],
  },
]);
