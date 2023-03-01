import { viteSingleFile } from 'vite-plugin-singlefile';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import { VitePWA } from 'vite-plugin-pwa';

/** @type {import('vite').UserConfig} */
export default {
  plugins: [
    viteSingleFile(),
    ViteMinifyPlugin(),
    VitePWA({
      injectRegister: 'inline',
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: [
          '**/*.{png,ico,svg}',
        ],
      },
      manifest: {
        name: 'QuickWA',
        short_name: 'QuickWA',
        description: 'Mulai chat dengan nomor WhatsApp tanpa menyimpan kontak',
        theme_color: '#262626',
        background_color: '#262626',
        icons: [
          {
            src: 'android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
};
