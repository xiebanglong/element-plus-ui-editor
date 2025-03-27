import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Pages from 'vite-plugin-pages';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { viteMockServe } from 'vite-plugin-mock';
import AutoImport from 'unplugin-auto-import/vite';
import config from './config';

const path = require('path');

const pathSrc = path.resolve(__dirname, 'src');

const isMock = true;

const target = '';

export default defineConfig({
  base: config.publicPath,
  plugins: [
    vue(),
    viteMockServe({
      mockPath: 'mock',
      localEnabled: isMock
    }),
    AutoImport({
      imports: ['vue', 'vue-router'],
      dts: path.resolve(pathSrc, 'types/auto-imports.d.ts'),
      eslintrc: {
        enabled: false,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true
      },
      resolvers: [ElementPlusResolver()]
    }),
    Pages({
      dirs: 'src/pages',
      extensions: ['vue'],
      exclude: ['**/components/*.vue']
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': pathSrc
    }
  },
  server: {
    port: '9999',
    proxy: {
      '/api': target // TODO 修改匹配地址，修改目标环境
    }
  }
});
