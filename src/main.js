import marquee from 'https://cdn.jsdelivr.net/npm/vanilla-marquee/dist/vanilla-marquee.js';

const myScroller = new marquee(document.getElementById('marquee'), {
  css3easing: 'linear',
  speed: 180,
  gap: 50,
  delayBeforeStart: 1000,
  direction: 'left',
  duplicated: true,
  duration: 5000,
  pauseOnHover: true,
});
const secondScroller = new marquee(document.getElementById('marquee-1'), {
  css3easing: 'linear',
  speed: 180,
  gap: 50,
  delayBeforeStart: 1000,
  direction: 'left',
  duplicated: true,
  duration: 5000,
});
const thirdScroller = new marquee(document.getElementById('marquee-2'), {
  css3easing: 'linear',
  speed: 180,
  gap: 50,
  delayBeforeStart: 1000,
  direction: 'right',
  duplicated: true,
  duration: 5000,
});

// SLIDER

const configuration = {
  type: 'carousel',
  perView: 3,
  gap: 100,
  autoplay: false,
  draggable: true,
  breakpoints: {
    1280: {
      perView: 1,
      gap: 80,
    },
  },
};
new Glide('.glide', configuration).mount();
