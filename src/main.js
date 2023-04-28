import './css/main.css';
import './css/fuentes.css';
import './css/swiper.css';
import './js/scrollreveal.js';
import './js/swiper-bundle.min.js';

const menuOpenBtn = document.querySelector('.menu-open-btn');
const menuCloseBtn = document.querySelector('.menu-close-btn');
const offcanvasMenu = document.querySelector('.offcanvas-menu');

console.log(menuCloseBtn);

menuCloseBtn.addEventListener('click', () => {
  offcanvasMenu.classList.add('translate-x-full');
  offcanvasMenu.classList.remove('translate-x-0');
});

menuOpenBtn.addEventListener('click', () => {
  offcanvasMenu.classList.add('translate-x-0');
  offcanvasMenu.classList.remove('translate-x-full');
});


// Animación de mis componentes
const sr = ScrollReveal();
sr.reveal('.texto-inicial', { duration: 2000, origin: 'left', distance: '-50px', desktop: true, mobile: true, reset: false, easing: 'cubic-bezier(0.5, 0, 0, 1)', });
sr.reveal('.header, .foto-perfil', { duration: 2000, origin: 'bottom', distance: '-100px', desktop: true, mobile: true, reset: false, easing: 'cubic-bezier(0.5, 0, 0, 1)', });
sr.reveal('.animacion-educacion-left', { duration: 1000, origin: 'right', distance: '-35px', desktop: true, mobile: true, reset: false, easing: 'cubic-bezier(0.5, 0, 0, 1)', })
sr.reveal('.animacion-educacion-right, .animacion-skills', { duration: 1500, origin: 'left', distance: '-35px', desktop: true, mobile: true, reset: false, easing: 'cubic-bezier(0.5, 0, 0, 1)', })
sr.reveal('.animacion-whyme', { duration: 1000, origin: 'bottom', distance: '-50px', desktop: true, mobile: true, reset: false, easing: 'cubic-bezier(0.5, 0, 0, 1)', })

const swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});