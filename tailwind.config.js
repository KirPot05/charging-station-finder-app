/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#382BDB",
        secondary: "#8127DE",
        success: "#17BB84",
      },
    },
  },
  plugins: [],
};
