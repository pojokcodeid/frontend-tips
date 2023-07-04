let code;

function createCaptcha() {
  document.getElementById("captcha").innerHTML = "";
  let charsArray =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";
  let lengthOtp = 6;
  let captcha = [];
  for (let i = 0; i < lengthOtp; i++) {
    let index = Math.floor(Math.random() * charsArray.length + 1);
    if (captcha.indexOf(charsArray[index]) == -1) {
      captcha.push(charsArray[index]);
    } else i--;
  }

  let canv = document.createElement("canvas");
  canv.id = "captcha";
  canv.width = 100;
  canv.height = 50;
  let ctx = canv.getContext("2d");
  ctx.font = "25px Georgia";
  ctx.strokeText(captcha.join(""), 0, 30);
  code = captcha.join("");
  document.getElementById("captcha").appendChild(canv);
}

function validateCaptcha(e) {
  event.preventDefault();
  debugger;
  if (document.getElementById("cpatchaTextBox").value == code) {
    alert("Valid Captcha");
  } else {
    alert("Invalid Captcha. try Again");
    createCaptcha();
  }
}

document.addEventListener("DOMContentLoaded", validateCaptcha);
