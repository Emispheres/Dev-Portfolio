// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,css,scss}'],
  // darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'apercu-mono': ['Courier Prime', 'monospace'],
        'apercu': ['system-ui', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'noto-sd': ['Noto SD 500', 'sans-serif'],
      },
      colors: {
        yellow: '#efc603',
      },
      keyframes: {
        typing: {
          '0%, 100%': {width: '0%'},
          '30%, 70%': {width: '100%'},
        },
        blink: {
          '0%': {
            opacity: 0,
          },
        },
        'rotate-loader': {
          '0%': {
            transform: 'rotate(0deg)',
            strokeDashoffset: '360%',
          },
          '100%': {
            transform: 'rotate(360deg)',
            strokeDashoffset: '-360%',
          },
        },
        slideInRight: {
          '0%': {
            transform: 'scaleX(0)',
            transformOrigin: 'right',
          },
          '100%': {
            transform: 'scaleX(1)',
            transformOrigin: 'right',
          },
        },
        slideOutRight: {
          '0%': {
            transform: 'scaleX(1)',
            transformOrigin: 'left',
          },
          '100%': {
            transform: 'scaleX(0)',
            transformOrigin: 'left',
          },
        },
        slideOutLeft: {
          '0%': {
            transform: 'scaleX(1)',
            transformOrigin: 'right',
          },
          '100%': {
            transform: 'scaleX(0)',
            transformOrigin: 'right',
          },
        },
        fadeIn: {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
        fadeInUp: {
          '0%': {
            opacity: 0,
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        slideFromLeft: {
          '0%' : {
            opacity: 0,
            transform: 'translateX(-1800px)',
          },
          '100%' : {
            opacity: 1,
            transform: 'translateX(0)',
          },
        },
        slideFromRight: {
          '0%' : {
            opacity: 0,
            transform: 'translateX(1800px)',
          },
          '100%' : {
            opacity: 1,
            transform: 'translateX(0)',
          },
        },
        // Animation pour faire disparaître les éléments (opacité 1 à 0)
        fadeOut: {
          '0%': {
            opacity: 1,
          },
          '100%': {
            opacity: 0,
          },
        },
      },
      animation: {
        slideInRight: 'slideInRight 1.1s ease-in-out',
        slideOutRight: 'slideOutRight 1.1s ease-in-out',
        slideOutLeft: 'slideOutLeft 1.1s ease-in-out',
        fadeIn: 'fadeIn 1s ease-in-out',
        fadeInUp: 'fadeInUp 1s ease-in-out',
        // Animation pour faire disparaître progressivement
        fadeOut: 'fadeOut 1s ease-in-out',
        slideFromLeft: 'slideFromLeft 1s ease-in-out',
        slideFromRight: 'slideFromRight 1s ease-in-out',
      },
      screens: {
        touch: {raw: 'only screen and (pointer: coarse)'},
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
