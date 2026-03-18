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
            transform: 'translateX(-50px)',
          },
          '100%' : {
            opacity: 1,
            transform: 'translateX(0)',
          },
        },
        slideFromRight: {
          '0%' : {
            opacity: 0,
            transform: 'translateX(50px)',
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
        // Nouvelles animations pour le scroll reveal
        scrollFadeIn: {
          '0%': {
            opacity: 0,
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        scrollFadeInLeft: {
          '0%': {
            opacity: 0,
            transform: 'translateX(-40px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0)',
          },
        },
        scrollFadeInRight: {
          '0%': {
            opacity: 0,
            transform: 'translateX(40px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0)',
          },
        },
        scrollScale: {
          '0%': {
            opacity: 0,
            transform: 'scale(0.9)',
          },
          '100%': {
            opacity: 1,
            transform: 'scale(1)',
          },
        },
        // Animation de pulsation subtile pour les boutons
        buttonPulse: {
          '0%, 100%': {
            boxShadow: '0 0 0 0 rgba(234, 88, 12, 0.4)',
          },
          '50%': {
            boxShadow: '0 0 0 8px rgba(234, 88, 12, 0)',
          },
        },
        // Animation de ripple pour le clic
        ripple: {
          '0%': {
            transform: 'scale(0)',
            opacity: 0.5,
          },
          '100%': {
            transform: 'scale(4)',
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
        slideFromLeft: 'slideFromLeft 0.7s ease-in-out',
        slideFromRight: 'slideFromRight 0.7s ease-in-out',
        // Nouvelles animations scroll
        scrollFadeIn: 'scrollFadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        scrollFadeInLeft: 'scrollFadeInLeft 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        scrollFadeInRight: 'scrollFadeInRight 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        scrollScale: 'scrollScale 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        buttonPulse: 'buttonPulse 2s ease-in-out infinite',
        ripple: 'ripple 0.6s ease-out',
      },
      screens: {
        touch: {raw: 'only screen and (pointer: coarse)'},
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
