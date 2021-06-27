module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
      extend: {
      colors: {
        red: {
          light: '#85d7ff',
          DEFAULT: '#1fb6ff',
          dark: 'rgb(60, 7, 37)',
          active: 'rgb(100, 7, 57)'
        },
        pink: {
          light: '#ff7ce5',
          DEFAULT: '#ff49db',
          dark: '#ff16d1',
        },
        gray: {
          darkest: 'rgb(24, 26, 27)',
          dark: 'rgb(30, 32, 34)',
          DEFAULT: '#c0ccda',
          light: 'rgb(48, 52, 54)',
          lightest: '#f9fafc',
        }
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
