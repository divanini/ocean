const menu = document.querySelector('.menu');
const list = document.querySelector('.nav__links');
const close = document.querySelector('.close');
close.onclick = function () {
  list.classList.remove('is-opened');
}
menu.onclick = function () {
  list.classList.toggle('is-opened');
}