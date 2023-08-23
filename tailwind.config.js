/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#fb923c",
        secondary: "#64748b",
        dark: "#0f172a",
      },
      // custom ukuran layar
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
