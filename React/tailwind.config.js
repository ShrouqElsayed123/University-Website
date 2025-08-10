/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: '#1e8c5c',
        mainColorLight1: '#54981f',
        mainColorDark1: '#3b7e05',
        secondaryColor: '#e0b315',
        secondaryColorLight1: '#e7c54a',
        secondaryColorDark1: '#cdab31',
        grayShade1: '#D9D9D9',
        grayShade2: '#C3C3C3',
        grayShade3: '#AEAEAE',
        gold: "#e0b315",
        thirdColor1: '#1e8c5c',
        thirdColor2: '#06a26c',
      },
      spacing: {
        'home-section-gap': '16px', // مثال لقيمة 40px
        'home-section-margin': '20px',   // مثال لقيمة 20px
        'home-section-padding': '40px',   // مثال لقيمة 20px
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'perspective(1000px) rotateY(0deg)' },
          '100%': { transform: 'perspective(1000px) rotateY(360deg)' }
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      },
      animation: {
        rotate: 'rotate 30s linear infinite',
        'fade-in': 'fadeIn 0.7s ease-in-out'
      }
    },
  },
  plugins: [],
}
