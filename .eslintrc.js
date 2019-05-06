// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: { // 0关闭，1警告，2错误
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 必须结束分号
    "semi": [2, "always"],
    // 关闭缩进校验
    "indent": 0,
    // 关闭函数名后空格
    "space-before-function-paren": 0,
    // 有未使用已经定义的变量或者常量定义
    "no-unused-vars": 1,
    // 关闭 每个js文件写完后要多写一行的空白行
    "eol-last": 0,
    // 关闭 逗号后需要一个空格
    "comma-spacing": 0,

    "no-tabs": 0,
    "keyword-spacing": 0,
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // 禁止 if 作为唯一的语句出现在 else 语句中
    'no-lonely-if': 0,
    // 关闭 禁止函数名称和调用它的左括号之间的空格。
    'func-call-spacing': 0,
    'standard/object-curly-even-spacing': 0
  }
}
