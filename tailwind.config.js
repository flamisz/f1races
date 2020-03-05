module.exports = {
  plugins: [
    require('@tailwindcss/ui'),
  ],
  theme: {
    fontFamily: {
      mono: ['"IBM Plex Mono"', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
    }
  },
  variants: {
  	boxShadow: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  }
}