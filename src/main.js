import './css/main.css';
import './css/fuentes.css';
import './css/swiper.css';
import './js/scrollreveal';
import './js/swiper-bundle.min.js'

// Animación de mis componentes
const sr = ScrollReveal();
sr.reveal('.texto-inicial', { duration: 2000, origin: 'left', distance: '-100px', desktop: true, mobile: true, reset: true, easing: 'cubic-bezier(0.5, 0, 0, 1)',});
sr.reveal('.header, .foto-perfil', { duration: 2000, origin: 'bottom', distance: '-100px', desktop: true, mobile: true, reset: false, easing: 'cubic-bezier(0.5, 0, 0, 1)',});
sr.reveal('.animacion-educacion-left', {duration: 3000, origin: 'right', distance: '-300px', desktop: true, mobile: true, reset: false, easing: 'cubic-bezier(0.5, 0, 0, 1)',})
sr.reveal('.animacion-educacion-right, .animacion-skills', {duration: 3000, origin: 'left', distance: '-300px', desktop: true, mobile: true, reset: false, easing: 'cubic-bezier(0.5, 0, 0, 1)',})
sr.reveal('.animacion-whyme', {duration: 3000, origin: 'bottom', distance: '-100px', desktop: true, mobile: true, reset: false, easing: 'cubic-bezier(0.5, 0, 0, 1)',})

var swiper = new Swiper(".mySwiper", {
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