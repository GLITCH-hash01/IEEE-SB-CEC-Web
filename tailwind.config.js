/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",


  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat',"sans-serif"]
    },
      fontSize:{
        '50': '50px',
        '35':'35px',
        '70':'70px',
      },
      fontWeight:{
        '600':'600'
      },
      
      

    },
  },
  plugins: [],
}

