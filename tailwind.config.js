/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "meta-blue": "#037dd6",
        "meta-orange": "	#f6851b",
        "meta-gray": {
          200: "#6a737d",
          300: "#3c444b",
          400: "#393e46",
          600: "#24292e",
          900: "#121212",
        },
      },
      fontSize: {
        "meta-3xl": "33px",
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
