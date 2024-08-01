/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#112D4E',
        'secondary-color': '#3F72AF',
        'background-color': '#F9F7F7',
        'accent-color': '#DBE2EF',
      }
    },
  },
  plugins: [],
}

