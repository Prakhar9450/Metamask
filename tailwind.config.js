/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "meta-blue": "rgb(3, 125, 214)",
        "meta-gray": "#121212",
        "meta-light-gray": "#282c2c",
      },
      fontSize: {
        "sm-2": "13.25px",
      },
      fontWeight: {
        "meta-bold": "750",
      },
    },
  },
  plugins: [],
};
