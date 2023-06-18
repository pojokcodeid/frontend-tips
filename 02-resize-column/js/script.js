const createResizableColumn = function (col, resizer) {
  // tentukan posisi saat ini
  let x = 0;
  let w = 0;
  const mouseDownHandler = function (e) {
    x = e.clientX;
    const style = window.getComputedStyle(col);
    w = parseInt(style.width, 10);

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
  };

  const mouseMoveHandler = function (e) {
    const dx = e.clientX - x;
    col.style.width = `${w + dx}px`;
  };

  const mouseUpHandler = function () {
    document.removeEventListener("mousemove", mouseMoveHandler);
    document.removeEventListener("mouseup", mouseUpHandler);
  };

  resizer.addEventListener("mousedown", mouseDownHandler);
};

function setRezie(table) {
  const cols = table.querySelectorAll("th");
  [].forEach.call(cols, function (col) {
    const resizer = document.createElement("div");
    resizer.classList.add("resizer");
    resizer.style.height = `${table.offsetHeight}px`;
    col.appendChild(resizer);
    createResizableColumn(col, resizer);
  });
}

const table = document.getElementById("resizeMe");
setRezie(table);
