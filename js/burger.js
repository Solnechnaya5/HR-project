const burgerMenuIcon = document.querySelector('.burger-menu-icon');
const burgerMenu = document.querySelector('.burger-menu');
const body = document.querySelector('body');

burgerMenuIcon.addEventListener('click', function(event) {
  burgerMenuIcon.classList.toggle('open-menu');
  burgerMenu.classList.toggle('open-menu');
  body.classList.toggle('fixed-page');
  event.stopPropagation(); 
});

document.addEventListener('click', function(event) {
  if (!burgerMenu.contains(event.target) && !burgerMenuIcon.contains(event.target)) {
  
    burgerMenuIcon.classList.remove('open-menu');
    burgerMenu.classList.remove('open-menu');
    body.classList.remove('fixed-page');
  }
});
