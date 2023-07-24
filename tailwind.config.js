/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    colors: {
      first: "#f5f4f5",
      second: "#222c3787",
      third: "#b4506b",
      fourth: "#a8b0c6",
    },
  },
  plugins: [require("daisyui")],
};
