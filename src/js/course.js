const cursos = [ 
    {
        imagen: 'hover:after:bg-birrete',
        titulo: 'Ingeniería de Sistemas',
        fecha: 'Febrero-2012 - Septiembre-2019',
        contenido: 'Realicé mi carrera universitaria en la Universidad de la Amazonia, donde adquirí valores y conocimientos fundamentales sobre la construcción de sistemas en nuestro entorno.'
    },
    {
        imagen: 'hover:after:bg-html',
        titulo: 'Curso Desarrollo Web Completo con HTML5, CSS3, JS AJAX PHP y MySQL',
        fecha: 'Mayo-2022 - Octubre-2022',
        contenido: 'En este curso aprendí a crear proyectos con HTML, CSS y JavaScript. Además, aprendí sobre MySQL y un poco de PHP. Mi sueño de ser desarrollador de software comenzó aquí.'
    },
    {
        imagen: 'hover:after:bg-css',
        titulo: 'Curso CSS La Guía Completa - Flexbox, CSS Grid, SASS',
        fecha: 'Noviembre-2022 - Febrero-2023',
        contenido: 'En este curso aprendí a dominar CSS, SASS, Grid, Flexbox, BEM, Gulp y el enfoque mobile first. Realicé proyectos sobre diseño web responsivo.'
    },
    {
        imagen: 'hover:after:bg-bootstrap',
        titulo: 'Curso Bootstrap 5 y SASS - La Guía Completa',
        fecha: 'Febrero-2023 - Marzo-2023',
        contenido: 'En el curso de Bootstrap aprendí sobre los fundamentos principales de un framework CSS. Realicé proyectos responsivos utilizando clases de CSS.'
    },
    {
        imagen: 'hover:after:bg-js',
        titulo: 'Curso JavaScript Moderno - La Guía Definitiva',
        fecha: 'Marzo-2023 - Mayo-2023',
        contenido: 'Realicé el curso de JavaScript. Sin embargo, aprendí temas como REST APIs, Asyn/Await, POO, Promises, Arrow Functions, entre otros.'
    },
    {
        imagen: 'hover:after:bg-react',
        titulo: 'Curso React - La Guía Completa: Hooks Context Redux MERN',
        fecha: 'Mayo-2023 - Actualmente',
        contenido: 'Actualmente estoy realizando el curso de React. En este momento, estoy aprendiendo a utilizar Hooks, Next.js, Redux, Vite y TailwindCSS.'
    },
];

cursos.forEach((curso, index) => {
    const skills = document.querySelector('.curso');

    const div = document.createElement('DIV');
    div.classList.add('educacion', `${curso.imagen}`, 'hover:after:-top-6', 'hover:after:bg-auto', 'p-6', 'text-left', 'border', 'rounded', 'hover:bg-white', 'hover:text-black', 'hover:scale-105', 'transition-all');
    const title = document.createElement('P');
    title.classList.add('font-bold');
    title.textContent = `${curso.titulo}`; 
    const date = document.createElement('P');
    date.classList.add('text-xs', 'font-mono', 'text-fecha');
    date.textContent = `${curso.fecha}`;
    date.id = `date-${index + 1}`;
    const content = document.createElement('P');
    content.classList.add('mt-2', 'font-montserrat' , 'text-xs', 'sm:text-base');
    content.textContent = `${curso.contenido}`;
    content.id = `course-${index + 1}`;

    if(curso.imagen.includes('hover:after:bg-birrete') || curso.imagen.includes('hover:after:bg-css') || curso.imagen.includes('hover:after:bg-js')) {
        div.classList.add('animacion-educacion-left');
    } else {
        div.classList.add('animacion-educacion-right');
    }

    div.appendChild(title);
    div.appendChild(date);
    div.appendChild(content);
    skills.appendChild(div);
});