/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,         // describe, expectなどをimportなしで使えるようにする
    environment: 'jsdom',  // ブラウザ環境をエミュレート
    setupFiles: './src/test/setup.ts', // (後述) 初期化設定
  },
});
