let headers = document.getElementsByClassName("accordion-header");
for (let i = 0; i < headers.length; i++) {
  headers[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    panel.classList.toggle("content");
  });
}
