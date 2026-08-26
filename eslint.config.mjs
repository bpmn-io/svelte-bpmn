import bpmnIoPlugin from 'eslint-plugin-bpmn-io';
import { createNodeResolver } from 'eslint-plugin-import-x';
import svelte from 'eslint-plugin-svelte';
import { fileURLToPath } from 'node:url';

const files = {
  ignored: [
    'dist',
    'example/public'
  ],
  build: [
    'rollup.config.mjs',
    'example/webpack.config.js'
  ],
  commonjs: [
    'example/webpack.config.js'
  ]
};

export default [
  {
    ignores: files.ignored
  },
  ...bpmnIoPlugin.configs.browser,
  ...bpmnIoPlugin.configs.esm,
  ...bpmnIoPlugin.configs.node.map(config => ({
    ...config,
    files: files.build,
    languageOptions: {
      ...config.languageOptions,
      ecmaVersion: 'latest'
    }
  })),
  ...svelte.configs.recommended,
  {
    files: files.commonjs,
    languageOptions: {
      sourceType: 'commonjs'
    },
    rules: {
      'import-x/no-commonjs': 'off'
    }
  },
  {
    settings: {
      'import-x/parsers': {
        espree: [
          '.js',
          '.mjs'
        ]
      },
      'import-x/resolver-next': [
        createNodeResolver({
          alias: {
            'svelte-bpmn': [
              fileURLToPath(new URL('./src/index.js', import.meta.url))
            ]
          }
        })
      ]
    }
  }
];
