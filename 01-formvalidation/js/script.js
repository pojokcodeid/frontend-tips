//deklarasi variable
const usernameEl = document.querySelector("#username");
const emailEl = document.querySelector("#email");
const passwordEl = document.querySelector("#password");
const confirmPasswordEl = document.querySelector("#confirmPassword");
const form = document.querySelector("#signup");

//validasi wajib diiisi
const isRequired = (value) => (value === "" ? false : true);
//fungsi bettwen
const isBetween = (length, min, max) =>
  length < min || length > max ? false : true;

//tampilkan error
const showError = (input, message) => {
  //ambil form dari element
  const formField = input.parentElement;
  //add error class
  formField.classList.remove("success");
  formField.classList.add("error");

  //tampilkan error message
  const error = formField.querySelector("small");
  error.innerText = message;
};

//tampilkan success
const showSuccess = (input) => {
  //ambil form dari field element
  const formField = input.parentElement;

  //remove error class
  formField.classList.remove("error");
  formField.classList.add("success");

  //hide error mesage
  const error = formField.querySelector("small");
  error.innerText = "";
};

//cek username
const checkUsername = () => {
  let valid = false;
  const min = 3,
    max = 25;
  const username = usernameEl.value.trim();
  if (!isRequired(username)) {
    showError(usernameEl, "Username harus diisi");
  } else if (!isBetween(username.length, min, max)) {
    showError(
      usernameEl,
      `Username minimal ${min} karakter dan maksimal ${max} karakter`
    );
  } else {
    showSuccess(usernameEl);
    valid = true;
  }

  return valid;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let isUsernameValid = checkUsername();
  let isEmailValid = checkEmail();
  let isPasswordValid = checkPassword();
  let isConfirmPasswordValid = checkConfirmPassword();

  let isFormValid =
    isUsernameValid &&
    isEmailValid &&
    isPasswordValid &&
    isConfirmPasswordValid;
  if (isFormValid) {
    //lakukan action submit
  }
});

const debonce = (fn, delay = 500) => {
  let timoutId;
  return (...args) => {
    if (timoutId) {
      clearTimeout(timoutId);
    }
    timoutId = setTimeout(() => {
      fn.apply(null, args);
    }, delay);
  };
};

form.addEventListener(
  "input",
  debonce((e) => {
    switch (e.target.id) {
      case "username":
        checkUsername();
        break;
      case "email":
        checkEmail();
        break;
      case "password":
        checkPassword();
        break;
      case "confirmPassword":
        checkConfirmPassword();
        break;
    }
  })
);

//validasi email
const isEmailValid = (email) => {
  const regx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regx.test(email);
};

const checkEmail = () => {
  let valid = false;
  const email = emailEl.value.trim();
  if (!isRequired(email)) {
    showError(emailEl, "Email harus diisi");
  } else if (!isEmailValid(email)) {
    showError(emailEl, "Email tidak valid");
  } else {
    showSuccess(emailEl);
    valid = true;
  }
  return valid;
};

const isPasswordSecure = (password) => {
  const regex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  return regex.test(password);
};

const checkPassword = () => {
  let valid = false;
  const password = passwordEl.value.trim();
  if (!isRequired(password)) {
    showError(passwordEl, "Password harus diisi");
  } else if (!isPasswordSecure(password)) {
    showError(
      passwordEl,
      "Password harus lebih dari 8 karakter, kombinasi huruf besar ,kecil dan Karakter"
    );
  } else {
    showSuccess(passwordEl);
    valid = true;
  }
  return valid;
};

const checkConfirmPassword = () => {
  let valid = false;
  const password = passwordEl.value.trim();
  const confirmPassword = confirmPasswordEl.value.trim();
  if (!isRequired(confirmPassword)) {
    showError(confirmPasswordEl, "Password harus diisi");
  } else if (password !== confirmPassword) {
    showError(confirmPasswordEl, "Password tidak sama");
  } else {
    showSuccess(confirmPasswordEl);
    valid = true;
  }
  return valid;
};
