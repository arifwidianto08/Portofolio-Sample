module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
    jquery: true,
    jest: true
  },
  extends: ['airbnb', 'plugin:@typescript-eslint/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true
    }
  },
  parser: '@typescript-eslint/parser',
  rules: {
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/indent': [
      'warn',
      2,
      {
        SwitchCase: 1
      }
    ],
    'arrow-body-style': 0,
    'react/jsx-max-props-per-line': [0, { when: 'always' }],
    'react/no-array-index-key': 0,
    'react/forbid-prop-types': 0,
    'react/require-default-props': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/destructuring-assignment': 0,
    'import/prefer-default-export': 0,
    'import/newline-after-import': 0,
    'no-console': 1,
    'no-debugger': 1,

    'no-var': 1,
    semi: [1, 'always'],
    indent: [
      'warn',
      2,
      {
        SwitchCase: 1
      }
    ],
    'max-len': [
      'warn',
      {
        code: 150,
        ignoreStrings: true
      }
    ],
    'max-lines': [
      'warn',
      {
        max: 500,
        skipBlankLines: true,
        skipComments: true
      }
    ],
    quotes: [
      'warn',
      'single',
      {
        allowTemplateLiterals: true
      }
    ],
    'no-trailing-spaces': 0,
    'eol-last': 0,
    'no-alert': 0,
    'no-lone-blocks': 0,
    'jsx-quotes': 1,
    'react/display-name': 0,
    'react/forbid-prop-types': [
      1,
      {
        forbid: ['any']
      }
    ],
    'react/jsx-filename-extension': 0,
    'react/jsx-boolean-value': 0,
    'react/jsx-closing-bracket-location': 0,
    'react/jsx-curly-spacing': 1,
    'react/jsx-indent-props': 0,
    'react/jsx-key': 1,
    'react/jsx-no-duplicate-props': 1,
    'react/jsx-no-literals': 0,
    'react/jsx-no-undef': 1,
    'react/jsx-pascal-case': 1,
    'react/jsx-sort-prop-types': 0,
    'react/jsx-sort-props': 0,
    'react/jsx-uses-react': 1,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/interactive-supports-focus': 0,
    quotes: 'off',
    'linebreak-style': 0,
    eqeqeq: 2,
    'no-fallthrough': 0,
    'comma-dangle': 0,
    'no-return-assign': 0,
    'no-underscore-dangle': 1
  }
};
