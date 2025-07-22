function debounce(fn, delay) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

const fn = debounce(console.log, 1000);
fn("hello");
fn("Pratik");
fn("test");
