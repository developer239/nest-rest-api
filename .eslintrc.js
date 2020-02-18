module.exports = {
  extends: [
    '@code-quality/eslint-config-node',
    '@code-quality/eslint-config-typescript',
    '@code-quality/eslint-config-jest',
    'prettier',
  ],
  rules: {
    'max-classes-per-file': 1,
  }
}
