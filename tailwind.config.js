/** @type {import('tailwindcss').Config} */
// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kids: ['kids', 'sans'],
        inter:['inter'] ,
        mont  : ['Montserrat'],
        lucky : ['"Luckiest Guy"'],
        bebas : ['"Bebas Neue"']
      },
      colors :{
        primary : "#F38A2D"
      }
    },
  },
  plugins: [],
};

