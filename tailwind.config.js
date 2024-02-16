/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},

    fontFamily: {
      comic: "'Comic Sans MS', 'sans-serif'",
    },

    colors: {
      white: "#FFFFFF",
      black: "#000000",
      red: "#C13221",
    },
  },
  plugins: [],
};
