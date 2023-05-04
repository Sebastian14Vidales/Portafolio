document.addEventListener('DOMContentLoaded', () => {

    const datos = {
      name: '',
      subject: '',
      email: '',
      message: '',
    }
    const formulario = document.querySelector('#contact-form');
  
    const inputNombre = document.querySelector('#name');
    const inputAsunto = document.querySelector('#subject');
    const inputCorreo = document.querySelector('#email');
    const inputMensaje = document.querySelector('#message');
  
    const btnEnviar = document.querySelector('#boton-submit');
      
    const spinner = document.querySelector('#spinner');
  
    inputNombre.addEventListener('blur', ejecutarInput);
    inputAsunto.addEventListener('blur', ejecutarInput);
    inputCorreo.addEventListener('blur', ejecutarInput);
    inputMensaje.addEventListener('blur', ejecutarInput);
  
    btnEnviar.addEventListener('click', registrarUsuario);
  
    function ejecutarInput(e) {
      const nombre = e.target.name;
      const elementoPadre = e.target.parentElement;
  
      if (e.target.value.trim() === '') {
        insertHTML(`El campo ${nombre} está vacio`, elementoPadre);
        datos[nombre] = '';
        habilitarBotonEnviar(datos);
        return;
      }
  
      if (nombre === 'email' && !validarCorreo(e.target.value)) {
        insertHTML(`Digite bien el ${nombre}`, elementoPadre);
        datos[nombre] = '';
        habilitarBotonEnviar(datos);
        return;
      }
  
      datos[nombre] = e.target.value.trim().toLowerCase();
      habilitarBotonEnviar(datos);
      borrarHTML(elementoPadre);
      console.log(datos);
    }
  
    function insertHTML(mensaje, referencia) {
      borrarHTML(referencia);
      const parrafo = document.createElement('P');
      parrafo.classList.add('bg-red-600', 'mt-1', 'p-1', 'text-white', 'text-center');
      parrafo.textContent = mensaje;
      referencia.appendChild(parrafo);
    }
  
    function borrarHTML(referencia) {
      const alerta = referencia.querySelector('.bg-red-600');
      if (alerta) {
        alerta.remove();
        return;
      }
      // console.log('Solo hay una alerta');
    }
  
    function validarCorreo(e) {
      const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
      const validar = regex.test(e)
      return validar;
    }
  
    function habilitarBotonEnviar() {
      if (Object.values(datos).includes('')) {
        btnEnviar.classList.add('bg-green-300'); 
        btnEnviar.classList.remove('bg-green-700'); 
        btnEnviar.disabled = true;
        return;
      }
      btnEnviar.classList.remove('bg-green-300'); 
      btnEnviar.classList.add('bg-green-700'); 
      btnEnviar.disabled = false;
    }
  
    function registrarUsuario(e) {
  
      e.preventDefault();

      const formData = new FormData(formulario);
      fetch('https://formsubmit.co/api/sendForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(formData.entries()))
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error en la respuesta de la API');
        }
        return response.json();
      })
      .then(data => {
        console.log('Respuesta de la API:', data);
        // Aquí puedes hacer algo con la respuesta de la API, por ejemplo mostrar un mensaje de éxito al usuario
      })
      .catch(error => {
        console.error('Error al enviar el formulario:', error);
        // Aquí puedes mostrar un mensaje de error al usuario
      });

      spinner.classList.remove('hidden');
      spinner.classList.add('flex');
  
      setTimeout(() => {
        spinner.classList.add('hidden');
        spinner.classList.remove('flex');
  
        resetearFormulario();
  
        const exito = document.createElement('P');
        exito.classList.add('bg-green-700', 'text-white', 'text-center', 'rounded', 'mt-3', 'p-2');
        exito.textContent = 'Usuario registrado con éxito';
        formulario.children[3].appendChild(exito);
  
        setTimeout(() => {
          exito.remove();
        }, 3000);
      }, 3000);
    }
  
    function resetearFormulario() {
      datos.name = '';
      datos.subject = '';
      datos.email = '';
      datos.message = '';
  
      formulario.reset();
      habilitarBotonEnviar();
    } 
});
