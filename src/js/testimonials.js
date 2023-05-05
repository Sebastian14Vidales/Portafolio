const testimoniales = [
    {
        testimonio: '"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."',
        foto: 'src/img/yilver.jpg',
        nombre: 'Yilver Molina',
        cargo: 'Software Designer, Tech Lead at Globant'
    },
    {
        testimonio: '"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."',
        foto: 'src/img/julian.jpg',
        nombre: 'Julian Mora',
        cargo: 'Front-End Developer at Crehana'
    },
    
    {
        testimonio: '"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."',
        foto: 'src/img/yilver.jpg',
        nombre: 'Yilver Molina',
        cargo: 'Software Designer, Tech Lead at Globant'
    },
    {
        testimonio: '"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."',
        foto: 'src/img/julian.jpg',
        nombre: 'Julian Mora',
        cargo: 'Front-End Developer at Crehana'
    },
];


const swiperWrapper = document.querySelector('.swiper-wrapper');
testimoniales.forEach( testimonio => {

    const swiperSlider = document.createElement('DIV');
    swiperSlider.classList.add('swiper-slide', 'text-center', 'text-lg', 'flex', 'justify-center', 'items-center');

    const swiperSliderChild = document.createElement('DIV');
    swiperSliderChild.classList.add('max-w-screen-xl', 'p-4', 'mx-auto', 'text-center', 'lg:py-8', 'lg:px-6');
    
    const figure = document.createElement('figure');
    figure.classList.add('max-w-screen-md', 'mx-auto');

    const blockquote = document.createElement('blockquote');
    const testi = document.createElement('P');
    testi.textContent = `${testimonio.testimonio}`
    testi.classList.add('text-sm', 'sm:text-2xl', 'font-medium', 'text-gray-900', 'dark:text-white');

    const figcaption = document.createElement('figcaption');
    figcaption.classList.add('flex', 'items-center', 'justify-center', 'mt-6', 'space-x-3');

    const imagen = document.createElement('img');
    imagen.classList.add('w-6', 'h-6', 'rounded-full');
    imagen.alt = `Imagen ${testimonio.nombre}`;
    imagen.src = `${testimonio.foto}`;
    
    const infoDiv = document.createElement('DIV');
    infoDiv.classList.add('flex', 'items-center', 'divide-x-2', 'divide-gray-500');

    const name = document.createElement('DIV');
    name.classList.add('pr-3', 'font-medium');
    name.textContent = `${testimonio.nombre}`;
    
    const ocupation = document.createElement('DIV');
    ocupation.classList.add('pl-3', 'font-montserrat', 'text-sm', 'font-light');
    ocupation.textContent = `${testimonio.cargo}`;

    infoDiv.appendChild(name);
    infoDiv.appendChild(ocupation);
    figcaption.appendChild(imagen);
    figcaption.appendChild(infoDiv);

    blockquote.appendChild(testi);
    figure.appendChild(blockquote);
    figure.appendChild(figcaption);
    swiperSliderChild.appendChild(figure);
    swiperSlider.appendChild(swiperSliderChild);

    swiperWrapper.appendChild(swiperSlider);
});

