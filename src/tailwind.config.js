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
        inter:['inter'] 
      },
      colors :{
        primary : "#F38A2D"
      },
      backgroundImage: {
        'custom-bg': 'url("/bg.png")', // Define a class name for your background image
      },
    },
  },
  plugins: [],
};

