/** @type {import('tailwindcss').Config} */
module.exports = {
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
      'darkBlack': '#181614',
      'lightBlack': '#212121',
      'white': '#FFFFFF'
    },
    extend: {},
  },
  plugins: [],
}
