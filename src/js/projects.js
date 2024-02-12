import ImagenProjectOne from '../img/extras.png';
import ImagenProjectTwo from '../img/control.webp';
import ImagenProjectThree from '../img/citasMascotas.webp';
import ImagenProjectFour from '../img/landing.png';
import ImagenProjectFive from '../img/formulario.webp';
import ImagenProjectSix from '../img/prestamo.webp';

import imagenBootstrap from '../img/bootstrap.svg';
import imagenCSS from '../img/css3.svg';
import imagenGitHub from '../img/github.svg';
import imagenJavaScript from '../img/js.svg';
import imagenTailwind from '../img/tailwind.svg';
import imagenMongoDB from '../img/mongodb.png';
import imagenExpress from '../img/express.svg';
import imagenNodeJS from '../img/nodejs.svg';
import imagenReact from '../img/react.svg';
import imagenVite from '../img/vitejs.svg';
import imagenSocket from '../img/socket.svg';
import imagenTypeScript from '../img/typescript.png';


const projects = [
    {
        imagen: ImagenProjectOne,
        description: "Horas Extras es un proyecto que simula una pequeña empresa que registra las horas extras de los empleados y calcula su valor.",
        link: "https://horas-extras-front-roan.vercel.app/",
        title: "Extras Hours",
        tecnologia: [
            {
                nombre: "TailwindCSS",
                imagen: imagenTailwind
            },
            {
                nombre: "Socket",
                imagen: imagenSocket
            },
            {
                nombre: "MongoDB",
                imagen: imagenMongoDB
            },
            {
                nombre: "Express",
                imagen: imagenExpress
            },
            {
                nombre: "NodeJS",
                imagen: imagenNodeJS
            },
            {
                nombre: "React",
                imagen: imagenReact
            },
        ],
        state: "Finalizado"
    },
    {
        imagen: ImagenProjectTwo,
        description: "Este proyecto puede simular tus finanzas. Debes insertar el nombre, el costo y la categoría de tu factura. Fue realizado con React, Vite y CSS.",
        link: "https://gastosplanificador.netlify.app/",
        title: "Finance App",
        tecnologia: [
            {
                nombre: "Bootstrap",
                imagen: imagenBootstrap
            },
            {
                nombre: "CSS",
                imagen: imagenCSS
            },
            {
                nombre: "Vite",
                imagen: imagenVite
            },
            {
                nombre: "React",
                imagen: imagenReact
            },
            {
                nombre: "GitHub",
                imagen: imagenGitHub
            },
        ],
        state: "Finalizado"
    },
    {
        imagen: ImagenProjectThree,
        description: "Este proyecto es un sistema donde puedes gestionar citas relacionadas con mascotas enfermas. Fue realizado con React, Vite y TailwindCSS.",
        link: "https://veterinariapets.netlify.app",
        title: "Pets App",
        tecnologia: [
            {
                nombre: "TailwindCSS",
                imagen: imagenTailwind
            },
            {
                nombre: "CSS",
                imagen: imagenCSS
            },
            {
                nombre: "Vite",
                imagen: imagenVite
            },
            {
                nombre: "React",
                imagen: imagenReact
            },
            {
                nombre: "GitHub",
                imagen: imagenGitHub
            },
        ],
        state: "Finalizado"
    },
    {
        imagen: ImagenProjectFour,
        description: "Este proyecto es una página de aterrizaje para una empresa que busca mostrar su equipo, socios y los servicios que ofrece.",
        link: "http://nigmauniverse.com",
        title: "Landing Nigma",
        tecnologia: [
            {
                nombre: "TailwindCSS",
                imagen: imagenTailwind
            },
            {
                nombre: "CSS",
                imagen: imagenCSS
            },
            {
                nombre: "Vite",
                imagen: imagenVite
            },
            {
                nombre: "React",
                imagen: imagenReact
            },
            {
                nombre: "TypeScript",
                imagen: imagenTypeScript
            },
            {
                nombre: "GitHub",
                imagen: imagenGitHub
            },
        ],
        state: "Por terminar"
    },
    {
        imagen: ImagenProjectFive,
        description: "El formulario es un proyecto donde se validan campos utilizando expresiones regulares con JavaScript. Además, este proyecto fue realizado con Bootstrap.",
        link: "https://validatedform.netlify.app/",
        title: "Form Validation",
        tecnologia: [
            {
                nombre: "Bootstrap",
                imagen: imagenBootstrap
            },
            {
                nombre: "CSS",
                imagen: imagenCSS
            },
            {
                nombre: "Vite",
                imagen: imagenVite
            },
            {
                nombre: "JavaScript",
                imagen: imagenJavaScript
            },
            {
                nombre: "GitHub",
                imagen: imagenGitHub
            },
        ],
        state: "Finalizado"
    },
    {
        imagen: ImagenProjectSix,
        description: "Loan Estimator es un proyecto donde puedes conocer el valor de tu préstamo, con tasas de interés y pagos mensuales.",
        link: "https://tuprestamoaqui.netlify.app",
        title: "Loan Estimator",
        tecnologia: [
            {
                nombre: "TailwindCSS",
                imagen: imagenTailwind
            },
            {
                nombre: "CSS",
                imagen: imagenCSS
            },
            {
                nombre: "Vite",
                imagen: imagenVite
            },
            {
                nombre: "React",
                imagen: imagenReact
            },
            {
                nombre: "GitHub",
                imagen: imagenGitHub
            },
        ],
        state: "Finalizado"
    },
]

document.addEventListener('DOMContentLoaded', crearHTML);

function crearHTML() {
    const recentProjects = document.querySelector('#projects');

    const gridProjects = document.createElement('DIV');

    gridProjects.classList.add('mt-8', 'xl:mt-0','xl:px-48','grid', 'gap-4', 'md:grid-cols-2', 'xl:grid-cols-3', 'xl:row-2', 'lg:grid-rows-2');

    // Project 1
    projects.forEach((project, index) => {
        const projectDiv = document.createElement('DIV');
        const descriptionDiv = document.createElement('DIV');
        const imagenDescription = document.createElement('IMG');
        const contentDescription = document.createElement('P');
        const linkDescription = document.createElement('a');

        const informationDiv = document.createElement('DIV');
        const blockDiv = document.createElement('DIV');
        const titleBlock = document.createElement('P');
        const dateBlock = document.createElement('P');
        const tecnologiasUL = document.createElement('ul');

        projectDiv.classList.add('shadow-black', 'drop-shadow-sm', 'rounded-xl', 'transition-all', 'hover:scale-105', 'card');
        descriptionDiv.classList.add('description');
        imagenDescription.classList.add('card-image');
        imagenDescription.style.width = 100;
        imagenDescription.style.height = 100;
        imagenDescription.alt = `Imagen ${project.title}`;
        imagenDescription.src = `${project.imagen}`;
        contentDescription.classList.add('h-[48px]','mt-2','text-oscuro', 'text-xs', 'text-justify', 'font-montserrat');
        contentDescription.textContent = `${project.description}`;
        contentDescription.id = `contentDescription-${index + 1}`;
        linkDescription.classList.add('abrir-proyecto', 'absolute', 'z-0', 'font-bold', 'bg-orange-400', 'font-montserrat', 'rounded-lg', 'w-2/3', 'px-4', 'py-2', 'text-xs', 'text-center', 'uppercase', 'text-white');
        linkDescription.href = `${project.link}`;
        linkDescription.target = "_blank";
        linkDescription.textContent = "Abrir Proyecto";

        informationDiv.classList.add('bg-white', 'p-3');
        blockDiv.classList.add('flex', 'justify-between');
        titleBlock.classList.add('card-titulo', 'font-bold', 'text-orange-400');
        titleBlock.innerHTML = `
            <span class="text-black text-sm">${project.title}</span>
        `;
        dateBlock.classList.add('card-titulo', 'font-bold', 'text-orange-400');
        dateBlock.innerHTML = `
        <span class="${project.state === 'Finalizado' ? 'text-green-700' : 'text-red-600'}">${project.state}</span>
        `;
        tecnologiasUL.classList.add('flex', 'h-[61px]', 'flex-wrap', 'items-center', 'gap-2', 'mt-6');

        if (project.tecnologia) {
            project.tecnologia.forEach((tec) => {
                const tecnologiaImagen = document.createElement('img');
                const tecnologiaSpan = document.createElement('span');
                const li = document.createElement('li');

                tecnologiaImagen.src = `${tec.imagen}`;
                tecnologiaImagen.classList.add('w-5', 'h-5');

                tecnologiaSpan.textContent = `${tec.nombre}`;
                tecnologiaSpan.classList.add('text-[10px]', 'ml-1', 'font-mono');

                li.classList.add('flex', 'items-center', 'bg-[#eee]', 'rounded-md', 'px-[0.4rem]', 'py-[0.2rem]')

                li.appendChild(tecnologiaImagen);
                li.appendChild(tecnologiaSpan);
                tecnologiasUL.appendChild(li);

            });
        }

        // Asignando variables a sus padres
        descriptionDiv.appendChild(imagenDescription);
        // descriptionDiv.appendChild(contentDescription);
        descriptionDiv.appendChild(linkDescription);

        blockDiv.appendChild(titleBlock);
        blockDiv.appendChild(dateBlock);

        informationDiv.appendChild(blockDiv);
        informationDiv.appendChild(contentDescription);
        informationDiv.appendChild(tecnologiasUL);

        projectDiv.appendChild(descriptionDiv);
        projectDiv.appendChild(informationDiv);


        gridProjects.appendChild(projectDiv);
    });
    recentProjects.appendChild(gridProjects);
}
