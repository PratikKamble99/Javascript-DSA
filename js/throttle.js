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

function throttle2(func, delay){
  let timer;

  return function(...args){
    if(!timer){
      timer = setTimeout(()=>{
        func(...args);
        timer = null
      }, delay)
    }
  }
}

// What exacly it does
// It uses closure : it check lasttime in millis with current time. If there differnce
// is greater than delay then it exeutes function.

function logScroll() {
  console.log("Scroll event at", new Date().toLocaleTimeString());
}

const throttledScroll = throttle(logScroll, 1000); // 1 second

window.addEventListener("scroll", throttledScroll);
