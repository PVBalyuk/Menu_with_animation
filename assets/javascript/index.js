import '../style/style.css'

const menu = document.querySelector('.header__menu');
const burger = document.querySelector('.header__burger-menu');
const burgerClose = document.querySelector('.header__menu_close');
burger.addEventListener('click', openMenu);
function openMenu () {
    menu.classList.add('header__menu_active');
}
burgerClose.addEventListener('click', closeMenu);
function closeMenu() {
    menu.classList.remove('header__menu_active');
}
