module.exports = {
  root: true,
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'prettier',
    'next/core-web-vitals',
  ],
  parserOptions: {
    baseUrl: '.',
    paths: {
      '@/*': ['./src/*'],
    },
    project: ['./tsconfig.json'],
  },
  rules: {
    'prettier/prettier': 1,
    'prefer-template': 1,
    'no-console': 1,
    '@typescript-eslint/no-unused-vars': 1,
    '@typescript-eslint/no-explicit-any': 1,
    'id-length': [2, { min: 2, properties: 'never' }],
    semi: [2, 'never'],
    'padding-line-between-statements': [
      'warn',
      { blankLine: 'always', prev: '*', next: 'return' },
      {
        blankLine: 'any',
        prev: ['singleline-const', 'singleline-let'],
        next: ['const', 'let'],
      },
      { blankLine: 'always', prev: 'import', next: '*' },
      { blankLine: 'never', prev: 'import', next: 'import' },
      { blankLine: 'always', prev: 'block-like', next: '*' },
      { blankLine: 'always', prev: '*', next: 'block-like' },
      { blankLine: 'always', prev: 'directive', next: '*' },
      { blankLine: 'always', prev: 'directive', next: '*' },
      { blankLine: 'any', prev: 'directive', next: 'directive' },
      { blankLine: 'any', prev: '*', next: 'case' },
    ],
  },
  ignorePatterns: ['node_modules/*', '.next/*', '.out/*', '.dist/*'],
}
