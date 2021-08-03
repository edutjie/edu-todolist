module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    textColor: {
      'primary': '#2b2d42',
      'secondary': '#ef233c',
      'tersier': '#8d99ae',
      'quarter': '#d90429',
      'bgcolor': '#edf2f4',
    },
    minWidth: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
      '125': '125px',
     },
  },
  variants: {
    extend: {
      fontSize: ["hover"],
      fontColor: ["hover"],
    },
  },
  plugins: [],
}
