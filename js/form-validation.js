// FORM VALIDATION
// check form inputs
let formPopup = document.querySelector(".signup-form");
let formBottom = document.querySelector(".signup-form_bottom");
let inputsChecked = document.querySelectorAll(".check-input");
let formButton = document.querySelector(".signup-btn");
let errorMsg = document.querySelectorAll(".input-error");

let userNames = document.querySelectorAll(".user-info");
let invalidInfo = document.querySelectorAll(".name-error");

let userPhone = document.querySelector(".user-phone");
let invalidPhone = document.querySelector(".phone-error");

let email = document.getElementById("email");
let invalidEmail = document.querySelector(".email-error");

let checkboxes = document.querySelectorAll(".custom-checkbox");
let invalidCheckbox = document.querySelector(".agriment-check");

let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


//check all fields on an empty
function checkEmpty() {
  for (let i = 0; i < inputsChecked.length; i++) {
    if (inputsChecked[i].value == 0) {
      errorMsg[i].textContent = "Fill in the field";
    } else {
        errorMsg[i].textContent = "";
            }
  }
}
// email validation
function checkEmail() {
  if (email.value == 0) {
    invalidEmail.textContent = "Fill in the field";
  } else if (!email.value.match(emailPattern)) {
    invalidEmail.textContent = "Email is not correct";
  } else {
    invalidEmail.textContent = "";
  }
}
// checkbox validation
function checkCheckbox() {
  
  for (let i = 0; i < checkboxes.length; i++) {
    if (!checkboxes[i].checked) {
      checkboxes[i].classList.add("error-check");
    } else {
      checkboxes[i].classList.remove("error-check");
    }
  }
}
formPopup.addEventListener("submit", function (event) {
  event.preventDefault();
  checkEmpty();
//   checkPhone();
  checkEmail();
  checkCheckbox();
});

formBottom.addEventListener("submit", function (event) {
  event.preventDefault();
  checkEmpty();
//   checkPhone();
  checkEmail();
  checkCheckbox();
});

