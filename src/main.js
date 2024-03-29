import './css/main.css';
import './css/fuentes.css';
import './css/swiper.css';
import './js/menu.js';
import './js/swiper.js';
import './js/typed.js';
import './js/topscroll.js';
import './js/formulario.js';
import './js/testimonials.js';
import './js/course.js';
import './js/skills.js';
import './js/downloadPdf.js';
import './js/scrollreveal.js';
import './js/projects.js'
import './js/language.js'

const fechaSpan = document.querySelector('.fecha');
let fecha = new Date();
const year = fecha.getFullYear();
fechaSpan.textContent = year;

// Google Analytics
window.dataLayer = window.dataLayer || []; 
function gtag(){
    dataLayer.push(arguments);
} 
gtag('js', new Date()); 
gtag('config', 'G-PLYSS30L1D');
