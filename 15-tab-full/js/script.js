function openPage(pageName, elmnt, color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
    tablinks[i].style.borderColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

let btn = document.getElementsByClassName("tablink");
let arr = ["lightgray", "#c0b7b7", "#aebeb1", "#f0eaea"];
for (let i = 0; i < btn.length; i++) {
  btn[i].onclick = function () {
    openPage(this.innerText, this, arr[i]);
  };
}

document.getElementById("defaultOpen").click();
