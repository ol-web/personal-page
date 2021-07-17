module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  ignorePatterns: ['static/'],
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {}
}
