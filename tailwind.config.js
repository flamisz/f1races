const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    fontFamily: {
      sans: [
          '"Roboto Slab"',
          ...defaultTheme.fontFamily.sans,
        ]
    }
  },
  variants: {
  	boxShadow: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  }
}