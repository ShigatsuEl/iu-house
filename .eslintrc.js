module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'eslint:recommended', // Uses the recommended rules from @eslint
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
    // 'prettier/@typescript-eslint', // Rules for prettier applied to @typescript-eslint
    // ESLint 8.0 버전에서 prettier/@typescript-eslint는 prettier로 통합되었다
    'prettier',
    'plugin:prettier/recommended', // Uses the recommended rules from @eslint-plugin-prettier
  ],
  // plugins에 추가되어야 extends에서 recommended rule을 추가할 수 있다
  plugins: [
    'react', // Add react plugin
    '@typescript-eslint', // Add @typescript-eslint plugin
    'prettier', // Add prettier plugin
  ],
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  env: {
    browser: true,
    node: true,
  },
  rules: {
    // Customize configuring rules
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};
