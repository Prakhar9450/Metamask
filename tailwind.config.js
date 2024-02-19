/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "meta-blue": "rgb(3, 125, 214)",
        "meta-gray": {
          200: "#70747c",
          300: "#40444c",
          400: "#403c44",
          600: "#282c2c",
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
