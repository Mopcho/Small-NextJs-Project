/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "custom-green": 'rgb(var(--color-green) / <alpha-value>)',
      "custom-gray": 'rgb(var(--color-gray) / <alpha-value>)'
    }
  },
  plugins: [],
}