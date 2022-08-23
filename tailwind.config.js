/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'min-tranparent': '#f0f0f0'
      },
      padding: {
        '100px': '100px',
      },
      maxWidth: {
        '50': '50px'
      },
      colors: {
        'deep-blue': "#0d6efd"
      }
    },
  },
  plugins: [],
}
