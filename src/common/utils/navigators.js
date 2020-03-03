export const isFirefox = navigator.userAgent.indexOf('Firefox') > -1;

const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

export const isTouchDevice = () => {
  const prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
  const mq = (query) => window.matchMedia(query).matches;
  if (('ontouchstart' in window) || (window.DocumentTouch && document instanceof DocumentTouch)) {
    return true;
  }
  const query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
  return mq(query);
};
