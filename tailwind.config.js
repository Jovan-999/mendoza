module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    screens: {
      '2xl': { max: '1535px' },
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' },
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
      maxWidth: {
        275: '275px',
        400: '400px',
        1050: '1050px',
        1400: '1400px',
        1920: '1920px',
      },
      width: {
        440: '440px',
      },
      inset: {
        40: '40%',
      },
      height: {
        60: '60px',
        140: '140px',
        270: '270px',
        609: '609px',
      },
      backgroundImage: {
        'usa-map': 'url(/img/USA.svg);',
        'home-hero': 'url(/img/home-hero.jpg);',
        'home-hero-2': 'url(/img/home-hero-2.png);',
      },
    },
  },
  plugins: [],
};
