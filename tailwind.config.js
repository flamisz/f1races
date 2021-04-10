module.exports = {
  purge: [
      './src/**/*.html',
      './src/**/*.vue',
      './src/**/*.jsx',
    ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      mono: ['Space Mono', 'mono-space'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
