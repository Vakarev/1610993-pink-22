let headerInner = document.querySelector('.header__inner');
let headerBox = document.querySelector('.header__box');
let nav = document.querySelector('.nav');
let button = document.querySelector('.header__toggle');
let header = document.querySelector('header');

header.classList.remove('header--menu');
headerInner.classList.remove('header__inner--menu');
headerBox.classList.remove('header__box--menu');
nav.classList.remove('nav--menu');
button.classList.remove('header__toggle--closed');

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  headerInner.classList.toggle('header__inner--menu');
  headerBox.classList.toggle('header__box--menu');
  nav.classList.toggle('nav--menu');
  nav.classList.toggle('nav--position');
  button.classList.toggle('header__toggle--closed');
});
