/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // If using App Router
  ],
  theme: {
    extend: {
      colors: {
        "text-dark": "#0e0e0e",
        "paragraph-gray": "#535353",
        primary: "#d2c3b2",
        "primary-light": "#f8f4f0",
        "base-gray": "#e9e9e9",
        "light-gray": "#f9f9fa",
        "dark-gray": "#afafaf",
        "dark-65": "rgba(36, 28, 24, 0.65)",
        "dark-gray-50": "rgba(175, 175, 175, 0.5)",
        "dark-gray-30": "rgba(175, 175, 175, 0.3)",
        "white-50": "rgba(255, 255, 255, 0.5)",
        "accent-blue": "#2d3c56",
      },
      fontFamily: {
        sans: ["Teachers", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        "pt-sans": ['"PT Sans"', "sans-serif"],
      },
    },
  },

  plugins: [
    "@tailwindcss/line-clamp",
    "@tailwindcss/typography",
  ],
};
