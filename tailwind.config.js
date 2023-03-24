/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation :{
        trans: "trans 0.5s"
      },
      colors: {
        alles: {
          200: "#f6f2e4",
          500: "#7d794f",
        },
      },
    },
  },
  plugins: [],
};
