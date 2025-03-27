/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';

  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module '*.json' {
  const value: any;
  export default value;
}

declare type JSONObject = Record<string, any>;
