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
        'playpen': ['Playpen Sans', 'serif'],
      },
      colors: {
        'content': '#a6aead',
        'content-primary': '#dbe3e2',
        'content-supper': '#727b7a',
      },
    },
  },
  plugins: [],
};
