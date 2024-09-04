/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blk: "#151515",
        gry: "#202020",
      },
    },
  },
  plugins: [],
};
