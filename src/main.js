import './css/main.css';
import './css/fuentes.css';
import './css/swiper.css';
import './js/menu.js';
import './js/swiper.js';
import './js/scrollreveal.js';
import './js/typed.js';
import './js/topscroll.js';
import './js/formulario.js';
import './js/testimonials.js';
import './js/downloadPdf.js';

const fechaSpan = document.querySelector('.fecha');
let fecha = new Date();
const year = fecha.getFullYear();
fechaSpan.textContent = year;
