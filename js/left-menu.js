var headerButton = document.querySelector('.main-header__button');
var buttonClose = document.querySelector('.left-menu__button-close');
var leftMenu = document.querySelector('.left-menu');
//popup
var popUp = document.querySelector('.pop-up-selector');
var addAd = document.querySelector('.add-ad');
var closeForm = document.querySelector('.main-form__close-form');

//действия для бокового меню
headerButton.addEventListener('click', function() {
  leftMenu.classList.remove('left-menu--hide');
});

buttonClose.addEventListener('click', function() {
  leftMenu.classList.add('left-menu--hide');
});
//действия для поп апа
addAd.addEventListener('click', function() {
  popUp.classList.remove('pop-up--hide');
  popUp.classList.add('pop-up');
});

closeForm.addEventListener('click', function() {
  popUp.classList.remove('pop-up');
  popUp.classList.add('pop-up--hide');
  
});

