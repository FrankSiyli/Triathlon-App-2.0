/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    fontSize: {
      s: "0.9rem",
      xs: "0.7rem",
    },
    colors: {
      first: "#f5f4f5",
      second: "#35558287",
      third: "#007CA687",
      fourth: "#00A3B187",
      fifth: "#0a1120",
      sixth: "#0a112079",
      alert: "#00A3B1",
      background: "#1d2732",
      green: "#07f53b",
      red: "#f51707",
    },
  },
  plugins: [require("daisyui")],
};
