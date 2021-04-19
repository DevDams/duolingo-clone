module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: '#235390',
        lightblue: '#1ab0f6',
        green: '#58cc05',
        grey: '#3c3c3c'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
