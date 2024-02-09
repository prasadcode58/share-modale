/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 0px 50px #F2EC99',
        '4xl': '0px 0px 50px #F1BDF2',
      },

      keyframes:{
        'breathingRed': {
          '50%': { transform: 'translateX(20px) translateY(20px) scale(1.11)' },
        },
        'breathingPurple': {
          '50%': { transform: 'translateX(40px) translateY(40px) scale(1.11)' },
        },
      },

      animation: {
        'breathingRed': 'breathingRed 8s ease-in-out infinite',
        'breathingPurple': 'breathingPurple 10s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}

