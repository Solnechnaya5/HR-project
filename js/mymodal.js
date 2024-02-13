
let popupWrap = document.querySelector('.popup-bg');
let popup = document.querySelector('.popup-wind');
let closeIcon  = document.querySelector('.close-icon');
let openButton = document.querySelector('#open-btn');
openButton.addEventListener('click', function openPopup() {
    popup.classList.add('is-show');
    
})

popupWrap.addEventListener('click', function closePopup() {
    popup.classList.remove('is-show');
})
closeIcon.addEventListener('click', function closePopup() {
    popup.classList.remove('is-show');
})