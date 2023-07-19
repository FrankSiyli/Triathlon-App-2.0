/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    colors: {
      dark: "#222c37",
      light: "#f5f4f5",
      grey: "#a8b0c6",
      red: "#b4506b",
    },
  },
  plugins: [require("daisyui")],
};
