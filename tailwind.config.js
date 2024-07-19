/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode support using the class strategy
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#f42c37",
        secondary: "",
        brandYellow: "#fdc62e",
        brandGreen: "#2dcc6f",
        brandBlue: "#1376f4",
        brandwhite: "#eeeeee"
      },
      container:{
        center: true,
        padding: {
          default: "1rem",
          sm: "3rem"
        },
      }
    },
  },
  plugins: [],
}