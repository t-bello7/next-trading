/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    './src/pages/index.tsx',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'colorPrimary': '#08d74f',
      'secondaryColor': '#FF3434',
      'lightGray': '#E8E8E8',
      'darkBlack': '#141414',
      'lightBlack': '#212121',
      'white': '#FFFFFF',
      'black': '#000000',
      'red': 'fff',
  
    },
    fontFamily: {
      clashDisplay: ["clash-display"],
      clashDisplayVariable: ["clash-display-variable"],
    },
    extend: {},
  },
  plugins: [],
}
