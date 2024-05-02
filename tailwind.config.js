const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Josefin': ['"Josefin Sans"', ...defaultTheme.fontFamily.sans],
        'Lato': ['"Lato"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#7E33E0",
        "primary-dark": "#0D0E43",
        "primary-light": "#8F3AFF",
        secondary: "#FB2E86",
        "secondary-dark": "#c22367",
        "secondary-light": "#f56ca7",
        "gray-light":"#9096B2"
      },
      screens: {
        /* we should start with mobile. */
        sm: "576px", // mobile landscape mode
        md: "768px", // tablet
        lg: "1024px", // latptop without side numerical in keypad
        xl: "1280px", // normal desktop
        xxl: "1400px", // huge monitor
      },
      backgroundImage:{
        'banner-1': "url('/assets/banner-1.jpg')",
        'banner-2': "url('/assets/banner-2.jpg')",
        'banner-3': "url('/assets/banner-3.jpg')",
      }
    }
  },
  plugins: [],
}