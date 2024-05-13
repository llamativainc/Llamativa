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

// script.js - Función de cambio de color al pasar el mouse a magenta
const imagesWithHover = document.querySelectorAll('.image img');

imagesWithHover.forEach(image => {
    image.addEventListener('mouseover', function() {
        image.style.filter = 'brightness(70%) sepia(100%) hue-rotate(300deg)';
    });

    image.addEventListener('mouseout', function() {
        image.style.filter = 'none';
    });
});