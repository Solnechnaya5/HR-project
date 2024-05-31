const burgerMenuIcon = document.querySelector('.burger-menu-icon');
const burgerMenu = document.querySelector('.burger-menu');
const body = document.querySelector('body');

burgerMenuIcon.addEventListener('click', function() {
  burgerMenuIcon.classList.toggle('open-menu');
  burgerMenu.classList.toggle('open-menu');
  body.classList.toggle('fixed-page');
});