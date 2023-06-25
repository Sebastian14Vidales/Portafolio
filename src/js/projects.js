import ImagenProjectOne from '../img/alquiler.webp';
import ImagenProjectTwo from '../img/gasto.webp';
import ImagenProjectThree from '../img/citasMascotas.webp';
import ImagenProjectFour from '../img/pets.webp';
import ImagenProjectFive from '../img/formulario.webp';
import ImagenProjectSix from '../img/prestamo.webp';

const projects = [
    {
        imagen: ImagenProjectOne,
        description: "The Finca Raiz project look for apartments or houses using search filters. This project was done with Bootstrap, SASS y JS.",
        link: "https://alquilar-fincaraiz.netlify.app",
        title: "Finca Raíz",
        date: "03/29/2023"
    },
    {
        imagen: ImagenProjectTwo,
        description: "This project simulate some weekly expenses of one person. You can insert values and a description. Also, it can generate alerts if your money is low.",
        link: "https://presupuesto-simulate.netlify.app",
        title: "Simulación",
        date: "04/18/2023"
    },
    {
        imagen: ImagenProjectThree,
        description: "This project is a project where you can manage some appointments about sick pets. It was done with React, Vite and TailwindCSSS.",
        link: "https://veterinariapets.netlify.app",
        title: "Pets Appointment",
        date: "06/13/2023"
    },
    {
        imagen: ImagenProjectFour,
        description: "This project allows to create, delete or update information about appointment for your pet. The project was done with HTML, Bootstrap and JavaScript.",
        link: "https://petsadmin.netlify.app/",
        title: "Pets Admin",
        date: "05/10/2023"
    },
    {
        imagen: ImagenProjectFive,
        description: "The form is a project where it validate fields using regular expressions with JavaScript. Besides, this project was done with Bootstrap.",
        link: "https://validatedform.netlify.app/",
        title: "Formulario",
        date: "03/20/2023"
    },
    {
        imagen: ImagenProjectSix,
        description: "Loan Estimator is a project where you can know about the value of your loan, with interest rates and monthly payments.",
        link: "https://tuprestamoaqui.netlify.app",
        title: "Loan Estimator",
        date: "05/23/2023"
    },
]

document.addEventListener('DOMContentLoaded', crearHTML);

function crearHTML() {
    const recentProjects = document.querySelector('#projects');

    const gridProjects = document.createElement('DIV');
    const titulo = document.createElement('DIV');
    const tituloHeading = document.createElement('H1');
    const tituloContent = document.createElement('P');

    gridProjects.classList.add('grid', 'gap-4', 'xl:grid-cols-12', 'xl:row-2', 'lg:grid-cols-11', 'lg:grid-rows-2');
    titulo.classList.add('flex', 'p-4', 'flex-col', 'justify-center', 'text-center', 'md:text-left', 'xl:row-start-1', 'xl:row-end-3', 'lg:col-start-1', 'lg:col-end-4', 'lg:row-start-1', 'lg:row-end-4', 'myCard', 'md:py-6', 'sm:col-start-1', 'sm:col-end-7');
    tituloHeading.classList.add('text-black', 'font-sans', 'text-2xl', 'lg:text-3xl', 'xl:text-4xl');
    tituloHeading.innerHTML = `
        My Recent <br><span>Works &#128170; &#128293; &#127912;</span>
    `;
    tituloContent.classList.add('text-sm', 'md:text-lg', 'text-black', 'mt-6');
    tituloContent.textContent = "I have designed and developed modern web solutions with a professional using lastest trends";
    titulo.appendChild(tituloHeading);
    titulo.appendChild(tituloContent);
    gridProjects.appendChild(titulo);

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

        projectDiv.classList.add('shadow-black', 'drop-shadow-sm', 'rounded-xl', 'hover:scale-105', 'card');
        descriptionDiv.classList.add('description');
        imagenDescription.classList.add('card-image');
        imagenDescription.style.width = 100;
        imagenDescription.style.height = 100;
        imagenDescription.alt = `Imagen ${project.title}`;
        imagenDescription.src = `${project.imagen}`;
        contentDescription.classList.add('description-content', 'md:text-xs', 'text-white', 'text-justify', 'font-montserrat');
        contentDescription.textContent = `${project.description}`;
        linkDescription.classList.add('abrir-proyecto', 'absolute', 'z-0', 'bg-orange-400', 'font-montserrat', 'rounded-lg', 'block', 'px-4', 'py-1', 'text-xs', 'text-white');
        linkDescription.href = `${project.link}`;
        linkDescription.target = "_blank";
        linkDescription.textContent = "Open Project";

        informationDiv.classList.add('bg-white', 'p-3');
        blockDiv.classList.add('flex', 'justify-between');
        titleBlock.classList.add('card-titulo', 'font-bold', 'text-orange-400');
        titleBlock.innerHTML = `
            Title: <span class="text-black">${project.title}</span>
        `;
        dateBlock.classList.add('card-titulo', 'font-bold', 'text-orange-400');
        dateBlock.innerHTML = `
            Published on: <span class="text-black">${project.date}</span>
        `;

        // Asignando variables a sus padres
        descriptionDiv.appendChild(imagenDescription);
        descriptionDiv.appendChild(contentDescription);
        descriptionDiv.appendChild(linkDescription);

        blockDiv.appendChild(titleBlock);
        blockDiv.appendChild(dateBlock);
        informationDiv.appendChild(blockDiv);

        projectDiv.appendChild(descriptionDiv);
        projectDiv.appendChild(informationDiv);

        if (index === 0) {
            projectDiv.classList.add('xl:col-span-3', 'lg:col-span-4', 'sm:col-start-7', 'sm:col-end-13');
        } else if (index === 1) {
            projectDiv.classList.add('xl:col-start-7', 'xl:col-end-10', 'xl:row-start-1', 'xl:row-end-2', 'lg:col-span-4', 'sm:col-start-7', 'sm:col-end-13', 'sm:row-start-3', 'sm:row-end-4');
        } else if (index === 2) {
            projectDiv.classList.add('xl:col-start-10', 'xl:col-end-13', 'xl:row-start-1', 'xl:row-end-2', 'lg:col-span-4', 'sm:col-start-1', 'sm:col-end-13', 'sm:row-start-2', 'sm:row-end-3');
        } else if (index === 3) {
            projectDiv.classList.add('xl:col-start-4', 'xl:col-end-7', 'xl:row-start-2', 'xl:row-end-3', 'lg:col-span-4', 'sm:col-start-1', 'sm:col-end-7', 'sm:row-start-3', 'sm:row-end-4');
        } else if (index === 4) {
            projectDiv.classList.add('xl:col-start-7', 'xl:col-end-10', 'xl:row-start-2', 'xl:row-end-3', 'lg:col-span-4', 'sm:col-start-1', 'sm:col-end-7');
        } else {
            projectDiv.classList.add('xl:col-start-10', 'xl:col-end-13', 'xl:row-start-2', 'xl:row-end-3', 'lg:col-span-4', 'sm:col-start-7', 'sm:col-end-13');
        }

        gridProjects.appendChild(projectDiv);
    });
    recentProjects.appendChild(gridProjects);
}
