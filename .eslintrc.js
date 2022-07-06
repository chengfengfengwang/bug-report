// ESlint 检查配置
module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },

  extends: ['plugin:vue/essential', '@vue/standard', 'prettier'],
  rules: {
    camelcase: [
      0,
      {
        properties: 'always'
      }
    ],
    'vue/multi-word-component-names': 'off',
    'vue/no-reserved-component-names': 'off'
  }
};
