/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#213F61",
        secondary: "#E78C3B",
      },
      fontFamily: {
        clash: ["Clash Display", "sans-serif"],
        DM_Sans: "DM Sans, sans-seri",
      },
    },
  },
  plugins: [],
};
