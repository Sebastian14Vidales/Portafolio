// Definir los textos en español e inglés
const titulos = {
  espanol: {
    myProjects: "Mis Proyectos",
    whyMe: "¿Por qué yo?",
    skills: "Habilidades",
    education: "Educación",
    testimonials: "Testimonios",
    contactMe: "Contáctame",
    aboutMe: "Acerca de mí",

  },
  ingles: {
    myProjects: "My Projects",
    whyMe: "Why me?",
    skills: "Skills",
    education: "Education",
    testimonials: "Testimonials",
    contactMe: "Contact Me",
    aboutMe: "About Me",
  }
}

const textos = {
  espanol: {
    hello: "Hola, soy",
    downloadCV: "Descargar CV",
    nameLabel: "Nombre",
    subjectLabel: "Asunto",
    emailLabel: "Correo Electrónico",
    messageLabel: "Mensaje",
    sendButton: "Enviar",
    home: "Inicio",
    projects: "Proyectos",
    description: "Soy un apasadionado Ingeniero de Sistemas y Desarrollador Web Front-End de Florencia, Colombia. Cuento con experiencia creando aplicaciones web con React | ViteJS | Remix | NodeJS | MongoDB | Express | Strapi y Redux. Además de frameworks de CSS como TailwindCSS o Bootstrap. Mi nivel actual de inglés es  B1.",
    descriptionWhyMe: "Soy un Desarrollador Front-End con más de 1 año de experiencia en tecnologías y herramientas de software. Estudié en la Universidad de la Amazonía y soy Ingeniero de Sistemas. Mi experiencia profesional y personal me permite tener la habilidad para resolver problemas y adaptarme a cualquier entorno laboral. Me encanta aprender y mejorar cada día en lo que hago. Por lo tanto, sería el mejor compañero de equipo para tu equipo u organización, así que no dude en conocerme y ponerse en contacto conmigo.",
    testimonialOne: '"Sebastián es una persona muy responsable y proactiva que siempre está abierta a desafíos, con las actitudes que una empresa necesita para avanzar. Desde el lado técnico, ha desarrollado sus habilidades en el desarrollo Frontend y está involucrado en algunos proyectos interesantes."',
    testimonialTwo: '"Sebastián demostró un profundo entendimiento de las últimas tecnologías y tendencias en desarrollo frontend. Su enfoque creativo y atención al detalle se reflejaron en la calidad del diseño y la usabilidad de la interfaz que mostró en su portafolio."',
    testimonialThree: '"Sebastián es una persona muy agradable, responsable y dedicada a sus proyectos. Sus habilidades están en tecnologías frontend, siempre está listo para nuevos desafíos y le gusta aprender algo nuevo cada día que añade valor a su conocimiento."',
  },
  ingles: {
    hello: "Hello, I am",
    downloadCV: "Download CV",
    nameLabel: "Name",
    subjectLabel: "Subject",
    emailLabel: "Email Address",
    messageLabel: "Message",
    sendButton: "Send",
    home: "Home",
    projects: "Projects",
    description: "Passionate Systems Engineer and Front-End Web Developer from Florencia, Colombia, I have experience in creating Web applications with React | ViteJS | Remix | NodeJS | MongoDB | Express | Strapi y Redux. Besides, I know about CSS frameworks like TailwindCSS o Bootstrap. I am currently learning English. My current english level is B1.",
    descriptionWhyMe: "I am a Front-End Developer with +1 year of experience in technologies and software tools. I studied at the University of Amazonia and I am a Systems Engineer. My professional and personal background allows me to have the ability to solve problems and adapt to any work environment. I love to learn and be better every day in what I do. Therefore, I would be the best coworker for your team or organization, so do not hesitate to get to know me and contact me.",
    testimonialOne: '"Sebastian is a very responsible and proactive person who is always open for challenges, having the attitudes that a company needs to move forward. From the technical side, he has developed his skills on Frontend development and is involving in some interesting projects."',
    testimonialTwo: '"Sebastian demonstrated a deep understanding of the latest technologies and trends in frontend development. His creative approach and attention to detail were reflected in the quality of the design and usability of the interface he showcased in his portfolio."',
    testimonialThree: '"Sebastian is a very nice guy, responsible and dedicated to his projects. His skills are in Front end technologies, he is always ready for new challenges and he likes to learn something new every day that adds value to his knowledge."',

  }
};

const proyectos = {
  espanol: {
    textoOne: "Horas Extras es un proyecto que simula una pequeña empresa que registra las horas extra y calcula su valor.",
    textoTwo: "Este proyecto puede simular tus finanzas. Debes insertar el nombre, el costo y la categoría de tu factura. Fue realizado con React, Vite y CSS.",
    textoThree: "Este proyecto es un sistema donde puedes gestionar citas relacionadas con mascotas enfermas. Fue realizado con React, Vite y TailwindCSS.",
    textoFour: "Este proyecto es una página de aterrizaje para una empresa que busca mostrar su equipo, socios y los servicios que ofrece.",
    textoFive: "El formulario es un proyecto donde se validan campos utilizando expresiones regulares con JavaScript. Además, este proyecto fue realizado con Bootstrap.",
    textoSix: "Loan Estimator es un proyecto donde puedes conocer el valor de tu préstamo, con tasas de interés y pagos mensuales.",
  },
  ingles: {
    textoOne: "Horas Extras is a project that simulates a small company which records employees' overtime hours and calculates their value.",
    textoTwo: "This project can simulate your finance. You must insert name, cost and category about your bill. It was done with React, Vite and CSS.",
    textoThree: "This project is a project where you can manage some appointments about sick pets. It was done with React, Vite and TailwindCSS.",
    textoFour: "This project is a landing page for a company looking to showcase its team, partners, and the services it offers.",
    textoFive: "The form is a project where it validate fields using regular expressions with JavaScript. Besides, this project was done with Bootstrap.",
    textoSix: "Loan Estimator is a project where you can know about the value of your loan, with interest rates and monthly payments.",
  }
}

const formulario = {
  espanol: {
    name: "Nombre",
    subject: "Asunto",
    email: "Correo Electrónico",
    message: "Mensaje",
    botonsubmit: "Enviar",
  },
  ingles: {
    name: "Name",
    subject: "Subject",
    email: "Email",
    message: "Message",
    botonsubmit: "Send",
  }
}
const cursos = {
  espanol: {
    contentOne: "Realicé mi carrera universitaria en la Universidad de la Amazonia, donde adquirí valores y conocimientos fundamentales sobre la construcción de sistemas en nuestro entorno.",
    contentTwo: "En este curso aprendí a crear proyectos con HTML, CSS y JavaScript. Además, aprendí sobre MySQL y un poco de PHP. Mi sueño de ser desarrollador de software comenzó aquí.",
    contentThree: "En este curso aprendí a dominar CSS, SASS, Grid, Flexbox, BEM, Gulp y el enfoque 'mobile first'. Realicé proyectos sobre diseño web responsivo.",
    contentFour: "En el curso de Bootstrap aprendí sobre los fundamentos principales de un framework CSS. Realicé proyectos responsivos utilizando clases de CSS.",
    contentFive: "Realicé el curso de JavaScript. Sin embargo, aprendí temas como REST APIs, Asyn/Await, POO, Promises, Arrow Functions, entre otros.",
    contentSix: "Actualmente estoy realizando el curso de React. En este momento, estoy aprendiendo a utilizar Hooks, Next.js, Redux, Vite y TailwindCSS.",
    dateOne: "Febrero-2012 - Septiembre-2019",
    dateTwo: "Mayo-2022 - Octubre-2022",
    dateThree: "Noviembre-2012 - Febrero-2023",
    dateFour: "Febrero-2023 - Marzo-2023",
    dateFive: "Marzo-2023 - Mayo-2023",
    dateSix: "Mayo-2023 - Actualmente",
  },
  ingles: {
    contentOne: "I did my college career at University of Amazonia where I acquired values and fundamental knowledge about systems building in our environment.",
    contentTwo: "In this course I learned to create projects with HTML, CSS and JavaScript. Also, I learned about MySQL and a little PHP. My dream to be software developer started here.",
    contentThree: "In this course learned to dominate CSS, SASS, Grid, Flexbox, BEM, Gulp and mobile first. I performed projects about designs web responsive.",
    contentFour: "The Bootstrap course I learned about main fundamentals of a frameworkCSS. I did responsive projects using CSS classes.",
    contentFive: "I did the JavaScript course. However, I learned topics such as REST APIS, Asyn/Await, POO, Promises, Arrow Functions, among others.",
    contentSix: "Currently I am doing the React course. In this moment, I am learning to use Hooks, Next.js, Redux, Vite and TailwindCSS.",
    dateOne: "February-2012 - September-2019",
    dateTwo: "May-2022 - October-2022",
    dateThree: "November-2012 - February-2023",
    dateFour: "February-2023 - March-2023",
    dateFive: "March-2023 - May-2023",
    dateSix: "May-2023 - Currently",
  }
}


// Definir los idiomas disponibles y sus respectivos iconos
const idiomas = {
  espanol: "EN",
  ingles: "ES"
};

const iconos = {
  espanol: 'src/img/usa.png',
  ingles: 'src/img/espana.png'
};

// Obtener el botón y los spans para el idioma actual e icono
const botonIdioma = document.getElementById("languageButton");
const spanIdioma = document.getElementById("currentLanguage");
const spanIcono = document.getElementById("iconoIdioma");

// Inicializar el idioma actual
let idiomaActual = "ingles";

// Función para cambiar el idioma
function cambiarIdioma() {

  if (idiomaActual === "espanol") {
    idiomaActual = "ingles";
    const pdfOne = document.getElementById("pdfOne");
    pdfOne.href = 'src/assets/SebastianVidalesCV.pdf'
  } else {
    idiomaActual = "espanol";
    const pdfOne = document.getElementById("pdfOne");
    pdfOne.href = 'src/assets/SebastianVidalesClarosCV.pdf'
    
  }

  // Actualizar el texto del botón con el nuevo idioma y el icono correspondiente
  spanIcono.innerHTML = ''; // Limpiar cualquier icono previo
  const imagen = document.createElement('img');
  imagen.src = iconos[idiomaActual];
  imagen.alt = 'Imagen Traductor';
  imagen.className = 'w-6'
  spanIcono.appendChild(imagen);
  spanIdioma.className = 'font-montserrat font-bold'
  spanIdioma.textContent = idiomas[idiomaActual];

  // Actualizar el texto de los elementos específicos
  document.getElementById("aboutMeTitle").textContent = titulos[idiomaActual].aboutMe;
  document.getElementById("whyMeTitle").textContent = titulos[idiomaActual].whyMe;
  document.getElementById("inicio").textContent = textos[idiomaActual].home;
  document.getElementById("acerca").textContent = titulos[idiomaActual].aboutMe;
  document.getElementById("proyectos").textContent = textos[idiomaActual].projects;
  document.getElementById("testimoniales").textContent = titulos[idiomaActual].testimonials;
  document.getElementById("contactame").textContent = titulos[idiomaActual].contactMe;
  document.getElementById("descargar").textContent = textos[idiomaActual].downloadCV;
  document.getElementById("descargarDos").textContent = textos[idiomaActual].downloadCV;
  document.getElementById("descripcion").textContent = textos[idiomaActual].description;
  document.getElementById("hello").textContent = textos[idiomaActual].hello;
  document.getElementById("habilidades").textContent = titulos[idiomaActual].skills;
  document.getElementById("educacion").textContent = titulos[idiomaActual].education;
  document.getElementById("MisProyectos").textContent = titulos[idiomaActual].myProjects;
  document.getElementById("testimonios").textContent = titulos[idiomaActual].testimonials;
  document.getElementById("contacto").textContent = titulos[idiomaActual].contactMe;
  document.getElementById("descripcionPorqueYo").textContent = textos[idiomaActual].descriptionWhyMe;
  document.getElementById("testimonio-1").textContent = textos[idiomaActual].testimonialOne;
  document.getElementById("testimonio-2").textContent = textos[idiomaActual].testimonialTwo;
  document.getElementById("testimonio-3").textContent = textos[idiomaActual].testimonialThree;

  const contentDescription1 = document.getElementById("contentDescription-1");
  const contentDescription2 = document.getElementById("contentDescription-2");
  const contentDescription3 = document.getElementById("contentDescription-3");
  const contentDescription4 = document.getElementById("contentDescription-4");
  const contentDescription5 = document.getElementById("contentDescription-5");
  const contentDescription6 = document.getElementById("contentDescription-6");
  if(contentDescription1, contentDescription2, contentDescription3, contentDescription4, contentDescription5, contentDescription6) {
    document.getElementById("contentDescription-1").textContent = proyectos[idiomaActual].textoOne;
    document.getElementById("contentDescription-2").textContent = proyectos[idiomaActual].textoTwo;
    document.getElementById("contentDescription-3").textContent = proyectos[idiomaActual].textoThree;
    document.getElementById("contentDescription-4").textContent = proyectos[idiomaActual].textoFour;
    document.getElementById("contentDescription-5").textContent = proyectos[idiomaActual].textoFive;
    document.getElementById("contentDescription-6").textContent = proyectos[idiomaActual].textoSix;
    document.getElementById("contentDescription-6").textContent = proyectos[idiomaActual].textoSix;
  }
  
  document.getElementById("course-1").textContent = cursos[idiomaActual].contentOne;
  document.getElementById("course-2").textContent = cursos[idiomaActual].contentTwo;
  document.getElementById("course-3").textContent = cursos[idiomaActual].contentThree;
  document.getElementById("course-4").textContent = cursos[idiomaActual].contentFour;
  document.getElementById("course-5").textContent = cursos[idiomaActual].contentFive;
  document.getElementById("course-6").textContent = cursos[idiomaActual].contentSix;
  document.getElementById("date-1").textContent = cursos[idiomaActual].dateOne;
  document.getElementById("date-2").textContent = cursos[idiomaActual].dateTwo;
  document.getElementById("date-3").textContent = cursos[idiomaActual].dateThree;
  document.getElementById("date-4").textContent = cursos[idiomaActual].dateFour;
  document.getElementById("date-5").textContent = cursos[idiomaActual].dateFive;
  document.getElementById("date-6").textContent = cursos[idiomaActual].dateSix;
  document.getElementById("nameForm").textContent = formulario[idiomaActual].name;
  document.getElementById("subjectForm").textContent = formulario[idiomaActual].subject;
  document.getElementById("emailForm").textContent = formulario[idiomaActual].email;
  document.getElementById("messageForm").textContent = formulario[idiomaActual].message;
  document.getElementById("botonsubmit").textContent = formulario[idiomaActual].botonsubmit;
}

// Agregar un event listener al botón para cambiar el idioma
botonIdioma.addEventListener("click", cambiarIdioma);

// Llamar a la función cambiarIdioma() al cargar la página para inicializar los textos en el idioma predeterminado
cambiarIdioma();
