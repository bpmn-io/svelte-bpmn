import bpmnIoPlugin from 'eslint-plugin-bpmn-io';
import svelte3 from 'eslint-plugin-svelte3';

const files = {
  ignored: [
    'dist',
    'example/public'
  ],
  node: [
    'rollup.config.js',
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
    files: files.node
  })),
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
    files: [ '**/*.svelte' ],
    plugins: {
      svelte3
    },
    processor: 'svelte3/svelte3',
    settings: {
      'svelte3/ignore-styles': attrs => attrs.lang === 'scss'
    }
  }
];
