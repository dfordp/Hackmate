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
        githubBlack:'#000000',
        lightModeWhite:'#F8F8F8',
        component1:"#D9D9D9",
        component2:"#A7A7A7",
        component3:"#DCDCDC",
        component4:"#ECECEC",
        component5:"#CACCD2",
        component6:"#EAEAEA",
      },
      fontFamily:{
        'sans': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      animation: {
        'slide-in': 'slide-in 0.5s ease-out',
        'slide-fwd': ' slide-fwd 0.45s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
      },
      cursor: {
        'zoom-in': 'zoom-in',
        pointer: 'pointer',
      },
      gap:{
        '100':'100px',
      },
      margin:{
        '30':'120px',
      },
    },
  },
  plugins: [],
}

