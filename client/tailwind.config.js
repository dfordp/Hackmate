/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        blackOverlay: 'rgba(0,0,0,0.6)',
        googleRed:'#FF5555',
        githubBlack:'#000000'
      },
      fontFamily:{
        'sans': ['Inter'],
      }
    },
  },
  plugins: [],
}

