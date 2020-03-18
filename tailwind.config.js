const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    fontFamily: {
      sans: [
          '"Roboto Slab"',
          ...defaultTheme.fontFamily.sans,
        ],
      mono: [...defaultTheme.fontFamily.mono]
    }
  },
  variants: {
  	boxShadow: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  }
}