module.exports = {
  root: true,
  ignorePatterns: ['config/*'],
  plugins: ['react', 'eslint-comments', 'promise', 'unicorn', 'prettier'],
  extends: [
    'airbnb-base',
    'plugin:eslint-comments/recommended',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'prettier',
  ],
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: [],
  },
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'import/no-unresolved': 'off',
    'import/no-named-as-default': 0,
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'react/destructuring-assignment': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'import/named': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'unicorn/filename-case': [
      'error',
      {
        cases: { camelCase: true, pascalCase: true, kebabCase: true },
      },
    ],
    'unicorn/prevent-abbreviations': [
      'error',
      {
        replacements: {
          e: {
            event: false,
          },
          res: false,
          props: false,
          params: false,
          str: false,
          args: false,
        },
      },
    ],
    'no-restricted-exports': 'off',
    'no-unused-vars': 'off',
    // 'unused-imports/no-unused-imports': 'error',
    // 'unused-imports/no-unused-vars': 'error',
    'unicorn/no-null': 'off',
    'linebreak-style': ['error', process.platform === 'win32' ? 'windows' : 'unix'],
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        // Allow CJS until ESM support improves
        'unicorn/prefer-module': 'off',
      },
    },
  ],
};
