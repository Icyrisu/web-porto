/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./public/**/*.{html,js}"],
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      b: "#050f1d",
      w: "#FEFAF6",
      o: "#e5a052",
      c: "#EADBC8",
    },
    fontFamily: {
      poppins: ["Poppins"],
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
