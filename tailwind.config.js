/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb", //blue-600
        lightGray: "#e7e5e4", //stone-300
        darkGray: "#57534e", //stone-600
      },
      gridTemplateColumns: {
        list: "30px 1fr auto auto",
        grid: "repeat(auto-fill, minmax(200px, 1fr))",
      },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
      },
    },
  },
  plugins: [],
};
