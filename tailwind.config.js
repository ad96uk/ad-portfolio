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
        "white100" : "#F5F4EE",
        "black100" : "#1F1E1E",
        "greenGrey" : "#AFB4A5",
        "greenAccent" : "#BCDA86",
        "green200" : "#D6DFC8",
        "green100" : "#DCE3CF"
      },
    },
  },
  plugins: [],
};
