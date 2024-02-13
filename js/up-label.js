let formLabels = document.querySelectorAll(".input-container_label");
let formInputs = document.querySelectorAll(".input-container_input");
console.log(formInputs)
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("focus", function() {
    formLabels[i].classList.add('label-up')
  });
  formInputs[i].addEventListener('blur', function () {
    if (formInputs[i].value === '') {
      formLabels[i].classList.remove('label-up');
    }
  });

  formInputs[i].addEventListener('input', function () {
    if (formInputs[i].value !== '') {
      formLabels[i].classList.add('label-up');
    } else {
      formLabels[i].classList.remove('label-up');
    }
  });
}


