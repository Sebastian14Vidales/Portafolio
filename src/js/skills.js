import imagenBootstrap from '../img/bootstrap.svg';
import imagenCSS from '../img/css3.svg';
import imagenGit from '../img/git.svg';
import imagenGitHub from '../img/github.svg';
import imagenHTML from '../img/html5.svg';
import imagenJS from '../img/js.svg';
import imagenMySQL from '../img/mysql.svg';
import imagenSass from '../img/sass.svg';
import imagenTailwind from '../img/tailwind.svg';
import imagenReact from '../img/react.svg';
import imagenNpm from '../img/npm.svg';
import imagenVite from '../img/vitejs.svg';

const skills = [
    { imagen: imagenBootstrap, nombre: 'Bootstrap' },
    { imagen: imagenTailwind, nombre: 'Tailwind' },
    { imagen: imagenCSS, nombre: 'CSS' },
    { imagen: imagenSass, nombre: 'Sass' },
    { imagen: imagenHTML, nombre: 'HTML5' },
    { imagen: imagenNpm, nombre: 'Npm' },
    { imagen: imagenGit, nombre: 'Git' },
    { imagen: imagenGitHub, nombre: 'GitHub' },
    { imagen: imagenJS, nombre: 'JavaScript' },
    { imagen: imagenReact, nombre: 'React' },
    { imagen: imagenMySQL, nombre: 'MySQL' }, 
    { imagen: imagenVite, nombre: 'ViteJS' }, 
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