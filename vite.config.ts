import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import monkey from 'vite-plugin-monkey';

export default defineConfig({
  plugins: [
    solidPlugin(),
    monkey({
      entry: 'src/index.tsx',
      userscript: {
        icon: 'https://vitejs.dev/logo.svg',
        namespace: 'npm/vite-plugin-monkey',
        match: ['https://mooc1.chaoxing.com/*',
            "https://mooc1-api.chaoxing.com/*"
        ],
          version: '1.0.0',
          author:"Coaixy",
          website:"https://www.lawliet.ren",
          description:"超星学习通复习助手,重新做一遍题目",
      },
    }),
  ],
});
