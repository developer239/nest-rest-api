module.exports = {
  extends: [
    '@code-quality/eslint-config-node',
    '@code-quality/eslint-config-typescript',
    '@code-quality/eslint-config-jest',
    'prettier',
  ],
  rules: {
    'max-classes-per-file': 1,
    '@typescript-eslint/generic-type-naming': [2, '^T[A-Z][a-zA-Z]+$'],
  }
}
