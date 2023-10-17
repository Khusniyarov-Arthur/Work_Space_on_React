export const throttle = (fn, ms) => {
  let timer = null;

  return function fnCall(...args) {
    if (timer) return;
    timer = setTimeout(() => {
      fn(...args);
      clearTimeout(timer);
      timer = null;
    }, ms);
  };
};
