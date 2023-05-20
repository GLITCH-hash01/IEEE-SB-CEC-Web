/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",


  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontSize:{
        '50': '50px',
        '35':'35px'
      },
      fontWeight:{
        '600':'600'
      },
      
      

    },
  },
  plugins: [],
}

