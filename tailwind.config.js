module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        'card': '0 20px 25px -5px rgb(0 0 0 / 0.03), 0 8px 10px -6px rgb(0 0 0 / 0.03);',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
