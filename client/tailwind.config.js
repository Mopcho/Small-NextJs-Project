/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-green": 'rgb(var(--color-green) / <alpha-value>)',
        "custom-gray": 'rgb(var(--color-gray) / <alpha-value>)',
        "custom-yellow": 'rgb(var(--color-yellow) / <alpha-value>)',
        "custom-cyan": 'rgb(var(--color-cyan) / <alpha-value>)',
        "custom-red": 'rgb(var(--color-red) / <alpha-value>)',
        "custom-black": 'rgb(var(--color-black) / <alpha-value>)',
        "custom-white-gray": 'rgb(var(--color-white-gray) / <alpha-value>)',
      }
    },
  },
  plugins: [],
}