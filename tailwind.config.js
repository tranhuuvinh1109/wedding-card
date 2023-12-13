/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sacr': ['Sacramento','Arial', 'serif'],
        'ballet': ['Ballet', 'serif'],
        'berkshire': ['Berkshire Swash', 'serif'],
      },
      colors: {
        'content': '#a6aead',
      },
    },
  },
  plugins: [],
};
