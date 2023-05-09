import imagenBootstrap from '../img/bootstrap.svg';
import imagenCSS from '../img/css3.svg';
import imagenGulp from '../img/gulp.svg';
import imagenHTML from '../img/html5.svg';
import imagenJS from '../img/js.svg';
import imagenMySQL from '../img/mysql.svg';
import imagenSass from '../img/sass.svg';
import imagenTailwind from '../img/tailwind.svg';

document.addEventListener('DOMContentLoaded', {
    
})
const skills = [
    { imagen: imagenBootstrap, nombre: 'Bootstrap' },
    { imagen: imagenCSS, nombre: 'CSS' },
    { imagen: imagenGulp, nombre: 'GulpJS' },
    { imagen: imagenHTML, nombre: 'HTML5' },
    { imagen: imagenJS, nombre: 'JavaScript' },
    { imagen: imagenMySQL, nombre: 'MySQL' },
    { imagen: imagenSass, nombre: 'Sass' },
    { imagen: imagenTailwind, nombre: 'Tailwind' },
];

skills.forEach(skill => {
    const habilidades = document.querySelector('.habilidades');

    const li = document.createElement('li');
    const image = document.createElement('img');
    image.classList.add('mx-auto');
    image.style.maxWidth = "40%"
    image.width = 100;
    image.height = 100;
    image.alt = `${skill.nombre}`;
    image.src = `${skill.imagen}`;
    
    const name = document.createElement('P');
    name.classList.add('font-bold', 'font-mono', 'text-center')
    name.textContent = `${skill.nombre}`;

    li.appendChild(image);
    li.appendChild(name);
    habilidades.appendChild(li);
})