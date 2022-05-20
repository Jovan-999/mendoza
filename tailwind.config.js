module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    screens: {
      '2xl': { 'max': '1535px' },
      'xl': { 'max': '1279px' },
      'lg': { 'max': '1023px' },
      'md': { 'max': '767px' },
      'sm': { 'max': '639px' },
    },
    extend: {
      colors: {
        darkGray: '#F7F7F7',
        grayLight: '#D88C70',
        lightOrange: '#CA7353',
        darkOrange: '#cc4a1a',
      },
      fontFamily: {
        helvetica: [
          'Helvetica Neue',
          'HelveticaNeue-Light',
          'Helvetica Neue Light',
          'Helvetica',
          'Arial',
          'Lucida Grande',
          'sans-serif',
        ],
        libre: ['Libre Baskerville', 'serif'],
      },
      fontSize: {
        0: '0',
      },
      inset: {
        40: '40%',
      },
      maxWidth: {
        400: '400px',
        1400: '1400px',
        1920: '1920px',
      },
      width: {
        440: '440px',
      },
      height: {
        140: '140px',
        609: '609px',
        670: '670px',
        683: '683px',
      },
      backgroundImage: {
        'usa-map': 'url(/img/USA.svg);',
        'harold-picture': 'url(/img/harold.png);',
      },
    },
  },
  plugins: [],
};
