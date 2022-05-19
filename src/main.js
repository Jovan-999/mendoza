import marquee from 'https://cdn.jsdelivr.net/npm/vanilla-marquee/dist/vanilla-marquee.js';

const myScroller = new marquee(document.getElementById('marquee'), {
  css3easing: 'linear',
  speed: 300,
  gap: 50,
  delayBeforeStart: 0,
  direction: 'left',
  duplicated: true,
  duration: 5000,
  pauseOnHover: true,
});
const secondScroller = new marquee(document.getElementById('marquee-1'), {
  css3easing: 'linear',
  speed: 300,
  gap: 50,
  delayBeforeStart: 0,
  direction: 'left',
  duplicated: true,
  duration: 5000,
});
const thirdScroller = new marquee(document.getElementById('marquee-2'), {
  css3easing: 'linear',
  speed: 300,
  gap: 50,
  delayBeforeStart: 0,
  direction: 'right',
  duplicated: true,
  duration: 5000,
});
