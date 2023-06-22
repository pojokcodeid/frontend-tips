let child = document.getElementsByClassName("child")[0];
let clkBut = document.getElementsByClassName("clk")[0];
let progSpan = document.getElementsByClassName("prog")[0];

let q = (function () {
  let width = 0;
  return function () {
    let x = setInterval(function () {
      if (width === 100) {
        clearInterval(x);
      } else {
        width++;
        child.style.width = width + "%";
        progSpan.innerHTML = width + "%";
      }
    }, 150);
  };
})();

clkBut.addEventListener("click", q);
