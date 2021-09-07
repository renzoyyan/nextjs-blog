module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins, sans-serif",
      },
      gridTemplateColumns: {
        "posts-grid": "repeat(auto-fill, minmax(20rem, 1fr))",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
