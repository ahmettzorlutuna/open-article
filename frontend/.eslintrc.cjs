/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:vue-pug/vue3-recommended'
  ],
  'rules': {
    'vue/order-in-components': 'off',
  },
  "env": {
    "vue/setup-compiler-macros": true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
