/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#CDE990',
        secondary: '#FFFFE8',
        tertiary: '#FFD4D4',
      },
    },
  },
  plugins: [],
}

