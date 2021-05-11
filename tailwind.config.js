module.exports = {
  purge: [
      './src/**/*.html',
      './src/**/*.vue',
      './src/**/*.jsx',
    ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      mono: ['Space Mono', 'mono-space'],
    },
    extend: {
      boxShadow: {
        underline: 'inset 0 -5px 0 0 #D1D5DB',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
