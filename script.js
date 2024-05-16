// script.js - Función de paralaje
window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset;

    document.querySelectorAll('.parallax').forEach(function(element) {
        let parallaxDistance = (scrollTop - element.offsetTop) * 0.5;
        element.style.backgroundPositionY = parallaxDistance + 'px';
    });
});

// script.js - Función de ajuste de imágenes
const images = document.querySelectorAll('.image img');

images.forEach(image => {
    image.style.maxWidth = '100%';
    image.style.height = 'auto';
});


// script.js - Función para mostrar y ocultar el menú en dispositivos móviles
document.querySelector('.menu-btn').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
});

document.querySelector('.close-btn').addEventListener('click', function() {
    document.querySelector('nav').classList.remove('active');
});

