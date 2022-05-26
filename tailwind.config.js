module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    screens: {
      '2xl': { max: '1536px' },
      xl: { max: '1280px' },
      lg: { max: '1024px' },
      md: { max: '768px' },
      sm: { max: '640px' },
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
        320: '320px',
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
        140: '140px',
        270: '270px',
        295: '295px',
        325: '325px',
        415: '415px',
        609: '609px',
      },
      spacing: {
        71: '71px',
        35: '35px',
      },
      backgroundImage: {
        'home-hero': 'url(/img/home-hero.jpg);',
        'home-hero-2': 'url(/img/home-hero-2.png);',
      },
    },
  },
  plugins: [],
};
