/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      Gray: "#EDEDED",
      red: "#ef4444",
      light: "#5C6AC1",
      normal: "#081A51",
      dark: "#411565",
      darker: "#1E0A2F",
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
