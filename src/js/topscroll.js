let mybutton = document.querySelector(".topscroll");
// const bandera = document.querySelector('.eu');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
      mybutton.style.display = "block";
  
    } else {
      mybutton.style.display = "none";
    }
  }
  
  mybutton.addEventListener('click', function () {
    document.body.scrollTo({ top: 0, behavior: 'smooth' }); // For Safari
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth' }); // For Chrome, Firefox, IE and Opera
  });