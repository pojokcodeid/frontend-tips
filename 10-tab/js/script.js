let tab = document.getElementsByClassName("tablinks");
for (let i = 0; i < tab.length; i++) {
  tab[i].addEventListener("click", function (evt, cityName = tab[i].innerText) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  });
}

document.getElementById("defaultOpen").click();

let close = document.getElementsByClassName("topright");
for (let i = 0; i < close.length; i++) {
  close[i].addEventListener("click", function () {
    this.parentElement.style.display = "none";
  });
}
