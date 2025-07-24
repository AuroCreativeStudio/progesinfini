/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',     // phones
      md: '768px',     // tablets
      lg: '1024px',    // small laptops
      xl: '1280px',    // desktops
      '2xl': '1536px', // large desktops
      '3xl': '1800px', // ultra-wide desktops
       'xxl': '2224px',
      'xxxl': '2808px',
    },
    extend: {
      fontFamily: {
        rem: ['"REM"', 'sans-serif'],
        charm: ['"Charm"', 'cursive'],
        garamond: ['"EB Garamond"', 'serif'],
      },
      colors: {
        'deep-blue': '#232946',
        'red-orange': '#f0542B',
        'lalic': '#B8C1EC',
        'cream': '#FFFFF8',
      },
    },
  },
  plugins: [],
}
