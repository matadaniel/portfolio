module.exports = {
  printWidth: 100,
  semi: false,
  singleQuote: true,
  arrowParens: 'avoid',
  plugins: [
    require.resolve('prettier-plugin-astro'),
    require('prettier-plugin-tailwindcss'), // MUST come last
  ],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  pluginSearchDirs: false,
}
