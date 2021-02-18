module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-preset-env')({
      stage: 1,
      browsers: 'last 2 versions',
    }),
  ]
}
