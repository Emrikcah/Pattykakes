module.exports = {
  purge: [
    './src/**/*.html',
     './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary:'#77c8b3',
        secondary:{
          100: '#f06898',
          200: '#f595b6'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
