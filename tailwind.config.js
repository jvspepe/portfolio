/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { "dark-primary": "#1A1A1A", "dark-secondary": "#111111" },
      fontFamily: { inter: ["Inter Variable", "sans-serif"] },
      screens: {
        sm: "641px",
        md: "769px",
        lg: "1025px",
        xl: "1281px",
        "2xl": "1537px",
      },
    },
  },
  plugins: [],
};
