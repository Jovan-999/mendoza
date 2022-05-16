import marquee from 'https://cdn.jsdelivr.net/npm/vanilla-marquee/dist/vanilla-marquee.js';

const myScroller = new marquee(document.getElementById('marquee'), {
  speed: 500,
  gap: 50,
  delayBeforeStart: 0,
  direction: 'left',
  duplicated: true,
  pauseOnHover: true,
});
const secondScroller = new marquee(document.getElementById('marquee-1'), {
  speed: 500,
  gap: 0,
  delayBeforeStart: 0,
  direction: 'left',
  duplicated: true,
  pauseOnHover: true,
});
const thirdScroller = new marquee(document.getElementById('marquee-2'), {
  speed: 500,
  gap: 0,
  delayBeforeStart: 0,
  direction: 'right',
  duplicated: true,
  pauseOnHover: true,
});
