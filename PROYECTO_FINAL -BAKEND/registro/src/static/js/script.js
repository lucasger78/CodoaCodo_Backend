const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function() {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark' 
    : 'fa-solid fa-bars' 
}


// BACK TO BTN
// Obtén una referencia al botón "Back to Top"
const backToTopBtn = document.getElementById("backToTopBtn");

// Agrega un evento scroll a la ventana
window.addEventListener("scroll", function() {
    // Si el scroll vertical es mayor a 30px, muestra el botón, de lo contrario, ocúltalo
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});

// Agrega un evento click al botón "Back to Top"
backToTopBtn.addEventListener("click", function() {
    // Desplaza la página hacia arriba suavemente
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


//Btn Back to Top
// Muestra u oculta el botón Back to Top según la posición del scroll
window.addEventListener("scroll", function() {
    const button = document.querySelector("#backToTopBtn");
    button.classList.toggle("show", window.scrollY > 0);
  });
  
  // Scroll suave hacia el encabezado de la página cuando se hace click en el botón
  document.querySelector("#backToTopBtn").addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });


