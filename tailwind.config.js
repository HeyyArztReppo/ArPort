/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#14b8a6' ,
        Secondary: '#475569',
        dark: '#18181b' ,
      },
      screens: {
        '2xl': '13 20px' ,
      },
    },
  },
  plugins: [],
}


