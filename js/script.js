const overlayNavbar = document.getElementById('overlay-js');
const menuNav = document.getElementById('navbar-js')
const buttonNav = document.getElementById('button-js');

const openSideNav = () => menuNav.classList.add('active');

const closedSideNav = () => menuNav.classList.remove('active');

buttonNav.addEventListener('click', openSideNav);
overlayNavbar.addEventListener('click', closedSideNav);
document.addEventListener('swiped-right', openSideNav);
document.addEventListener('swiped-left', closedSideNav);

window.onload = () => {}