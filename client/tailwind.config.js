/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#141414",
        blue: "#3575E2",
        grey: "#e7e6e6",
      },
    },
  },
  plugins: [],
};
