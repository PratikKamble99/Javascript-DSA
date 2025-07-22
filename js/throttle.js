function throttle(func, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}

// What exacly it does
// It uses closure : it chech lasttime in millis with current time. If there differnce
// is greater than delay then it exeutes function.

function logScroll() {
  console.log("Scroll event at", new Date().toLocaleTimeString());
}

const throttledScroll = throttle(logScroll, 1000); // 1 second

window.addEventListener("scroll", throttledScroll);
