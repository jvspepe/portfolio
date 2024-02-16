/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#111111",
        coffee: "#735135",
        feldgrau: "#435e5b",
      },
      fontFamily: {
        inter: ["Inter Variable", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        sm: "641px",
        md: "769px",
        lg: "800px",
        xl: "800px",
        "2xl": "800px",
      },
    },
  },
  plugins: [],
};
