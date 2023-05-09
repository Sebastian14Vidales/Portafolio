const cursos = [ 
    {
        imagen: 'hover:after:bg-birrete',
        titulo: 'Ingeniería de Sistemas',
        fecha: 'February-2012 - September-2019',
        contenido: 'I did my college career at University of Amazonia where I acquired values and fundamental knowledge about systems building in our environment.'
    },
    {
        imagen: 'hover:after:bg-html',
        titulo: 'Curso Desarrollo Web Completo con HTML5, CSS3, JS AJAX PHP y MySQL',
        fecha: 'May-2022 - October-2022',
        contenido: 'In this course I learned to create projects with HTML, CSS and JavaScript. Also, I learned about MySQL and a little PHP. My dream to be software developer started here.'
    },
    {
        imagen: 'hover:after:bg-css',
        titulo: 'Curso CSS La Guía Completa - Flexbox, CSS Grid, SASS',
        fecha: 'November-2022 - February-2023',
        contenido: 'In this course learned to dominate CSS, SASS, Grid, Flexbox, BEM, Gulp and mobile first. I performed projects about designs web responsive.'
    },
    {
        imagen: 'hover:after:bg-bootstrap',
        titulo: 'Curso Bootstrap 5 y SASS - La Guía Completa',
        fecha: 'February-2023 - March-2023',
        contenido: 'The Bootstrap course I learned about main fundamentals of a frameworkCSS. I did responsive projects using CSS classes.'
    },
    {
        imagen: 'hover:after:bg-js',
        titulo: 'Curos JavaScript Moderno - La Guía Definitiva',
        fecha: 'March-2023 - Currently',
        contenido: 'Currently I am finishing the JavaScript course. However, I have learned topics such as REST APIS, Asyn/Await, POO, Promises, Arrow Functions, among others.'
    },
];

cursos.forEach(curso => {
    const skills = document.querySelector('.curso');

    const div = document.createElement('DIV');
    div.classList.add('animacion-educacion-left', 'educacion', `${curso.imagen}`, 'hover:after:-top-6', 'hover:after:bg-auto', 'p-6', 'text-left', 'border', 'rounded', 'hover:bg-white', 'hover:text-black', 'hover:scale-105', 'transition-all');
    const title = document.createElement('P');
    title.classList.add('font-bold');
    title.textContent = `${curso.titulo}`; 
    const date = document.createElement('P');
    date.classList.add('text-xs', 'font-mono', 'text-fecha');
    date.textContent = `${curso.fecha}`;
    const content = document.createElement('P');
    content.classList.add('mt-2', 'text-xs', 'sm:text-base');
    content.textContent = `${curso.contenido}`;
    if(curso.imagen.includes('hover:after:bg-js')) {
        div.classList.add('block', 'sm:hidden');
    } else {
        div.classList.remove('block', 'sm:hidden');
    }

    div.appendChild(title);
    div.appendChild(date);
    div.appendChild(content);
    skills.appendChild(div);
});