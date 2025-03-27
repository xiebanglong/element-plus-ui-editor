module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'eslint-config-prettier',
    './.eslintrc-auto-import.json',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      },
      typescript: {} // 使用tsconfig.json配置
    }
  },
  globals: {
    JSONObject: true,
    ArrayValue: true
  },
  plugins: ['vue', 'eslint-plugin-import', '@typescript-eslint', 'prettier'],
  ignorePatterns: ['src/assets/**', 'src/types/auto-imports.d.ts'],
  rules: {
    'import/extensions': ['error', 'always', { js: 'ignorePackages', ts: 'ignorePackages', vue: 'ignorePackages' }],
    'func-names': ['error', 'never'],
    'vue/multi-word-component-names': [
      'warn',
      {
        ignores: ['index']
      }
    ],
    'import/prefer-default-export': 'off',
    'no-restricted-syntax': 'off',
    'guard-for-in': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.test.ts', '**/*.spec.ts', 'vite.config.ts', 'mock/index.ts'] }
    ],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'import/no-unresolved': ['error', { ignore: ['~pages'] }]
  }
};
