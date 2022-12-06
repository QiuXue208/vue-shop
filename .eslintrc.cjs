module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
      tsx: true
    },
    sourceType: 'module',
    project: ['./tsconfig.json']
  },
  parser: 'vue-eslint-parser',
  plugins: [
    'vue'
  ],
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly'
  },
  rules: {
    'vue/multi-word-component-names': 'off'
  }
}
