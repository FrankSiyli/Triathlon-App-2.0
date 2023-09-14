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
      second: "#35558287",
      third: "#007CA687",
      fourth: "#00A3B187",
      alert: "#00A3B1",
    },
  },
  plugins: [require("daisyui")],
};
