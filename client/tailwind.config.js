/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      custom: ["Arima", "cursive"]
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    // ...
  ],
}

// #d6e6ff heafer collor

// #fefefe bg color
  