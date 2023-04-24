import './css/main.css'
import './css/fuentes.css'
import './js/scrollreveal'

// Animación de mis componentes
window.sr = ScrollReveal();
sr.reveal('.texto-inicial', {
    duration: 2000,
    origin: 'top',
    distance: '100px',
    desktop: true,
    mobile: true,
    reset: true,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
});

