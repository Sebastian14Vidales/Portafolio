const menuOpenBtn = document.querySelector('.menu-open-btn');
const menuItems = document.querySelectorAll('.menu-item');
const offcanvasMenu = document.querySelector('.offcanvas-menu');
const body = document.querySelector('.body');
const over = document.querySelector('.over');

function cerrarMenu() {
  body.classList.remove('overflow-hidden');
  over.classList.add('hidden');
  over.classList.remove('block');
  offcanvasMenu.classList.add('translate-x-full');
  offcanvasMenu.classList.remove('translate-x-0');
}

menuItems.forEach(item => {
  item.addEventListener('click', cerrarMenu);
});

document.addEventListener('click', (event) => {
  // Agregar evento de clic al documento para cerrar el menú
  // Verificar si el clic ocurrió dentro o fuera del menú
  if (!offcanvasMenu.contains(event.target) && !menuOpenBtn.contains(event.target)) {
    cerrarMenu();
  }
});

menuOpenBtn.addEventListener('click', () => {
  body.classList.add('overflow-hidden');
  over.classList.remove('hidden');
  over.classList.add('block');
  offcanvasMenu.classList.add('translate-x-0');
  offcanvasMenu.classList.remove('translate-x-full');
});