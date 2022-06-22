module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#fff",
      "ci-blue": ["#07538F"],
      "ci-aqua": ["#15A2DA"],
      "ci-red": ["#F16161", "#BD4245"],
      "ci-gray": ["#393939"],
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
      center: true,
    },
    fontFamily: {
      lato: ["Lato", "sans-serif"],
      baloo: ["'Baloo Da 2'", "cursive"],
    },
    extend: {},
  },
  plugins: [],
};
