/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#5d60c1',
        dark: '#1e1e1e',
        light: '#f5f5f5',
        lightBlue: '#dbedf7'
      },  
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '3rem'
        },
      }
    },
  },
  plugins: [],
}