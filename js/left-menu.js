var headerButton = document.querySelector('.main-header__button');
var buttonClose = document.querySelector('.left-menu__button-close');
var leftMenu = document.querySelector('.left-menu');


headerButton.addEventListener('click', function() {
  leftMenu.classList.remove('.left-menu--hide');
});

buttonClose.addEventListener('click', function() {
  leftMenu.classList.add('.left-menu--hide');
});
