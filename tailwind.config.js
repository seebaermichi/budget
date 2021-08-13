module.exports = {
  purge: ['index.html'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        screens: {
            'h-sm': {'raw': '(min-height: 660px)'}
        }
    },
  },
  variants: {
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
