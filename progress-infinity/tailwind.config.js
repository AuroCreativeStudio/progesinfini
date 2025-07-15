/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
            fontFamily: {
            rem: ['"REM"', 'sans-serif'],
             charm: ['"Charm"', 'cursive'],
      },
      colors:{
        'deep-blue': '#232946',
        'red-orange': '#f0542B',
        'lalic': '#B8C1EC',
        'cream': '#FFFFF8',          },
    },
  },
  plugins: [],
}

//232946 deep blue 
// F0542B red orange
// B8C1EC Lilac
// FFFFF8 Cream