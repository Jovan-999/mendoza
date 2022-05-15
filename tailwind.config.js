module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        gray: '#F7F7F7',
        orange: '#CA7353',
      },
      fontFamily: {
        secondary: ['Poppins'],
      },
      maxWidth: {
        400: '400px',
        1400: '1400px',
        1920: '1920px',
      },
      height: {
        670: '670px',
      },
      backgroundImage: {
        'usa-map': 'url(/img/USA.svg);',
      },
      animation: {
        infinite:
          '14.54s linear 1s infinite normal none running marqueeAnimation-2508740',
      },
      // backgroundImage: {
      //   usa: "url('/img/USA.svg')",
      // },
    },
  },
  plugins: [],
};
