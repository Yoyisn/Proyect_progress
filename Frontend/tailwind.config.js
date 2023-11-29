/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");


export default module.exports = withMT({
  content:
    ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",
      "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'abc': ["Germania "],
        
      },
      colors: {
        'Softorange': 'hsl(35, 77%, 62%)',
        'Softred': 'hsl(5, 85%, 63%)',
        'Offwhite': 'hsl(36, 100%, 99%)',
        'Grayishblue': 'hsl(233, 8%, 79%)',
        'Darkgrayishblue': 'hsl(236, 13%, 42%)',
        'Verydarkblue': 'hsl(240, 100%, 5%)',
        'Bgblue': 'rgb(43, 46, 74)',
        'Tred': 'rgb(232, 69, 69)',
        'Darkred': 'rgb(144, 55, 73)',
        'Brown': 'rgb(83, 53, 74)',
        'Bgbluelow': 'rgb(43, 46, 68)',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('flowbite/plugin'),
  ],
})
