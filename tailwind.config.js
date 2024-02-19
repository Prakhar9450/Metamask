/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "meta-blue": "rgb(3, 125, 214)",
        "meta-gray": {
          200: "#6a737d",
          300: "#3c444b",
          400: "#393e46",
          600: "#24292e",
          900: "#121212",
        },
      },
      fontSize: {
        "sm-2": "13.25px",
        "base-2": "15px",
      },
      fontWeight: {
        "meta-bold": "750",
      },
    },
  },
  plugins: [],
};
