// .eslintrc.js
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ['airbnb', 'eslint:recommended', 'plugin:prettier/recommended'],
  rules: {
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx']
      }
    ],
    'no-console': 0,
    'react/prop-types': ['off']
    // props의 타입체크를 처리하려면 prop-types보단 차라리 typescript를 사용하는게 낫다는 의견
  }
};
// prettier 설정을 마지막에 넣어야 겹치는 설정이 무시될 수 있다.

/*
"extends": ["plugin:prettier/recommended"]는 세 가지를 한다고 설명한다.
1. eslint-plugin-prettier를 실행한다.(Enables eslint-plugin-prettier.)
2. prettier/prettier의 규칙을 "error"로 설정한다.(Sets the prettier/prettier rule to "error".)
3. eslint-config-prettier를 적용시킨다.(Extends the eslint-config-prettier configuration.)
  */
