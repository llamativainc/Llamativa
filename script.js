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

const indicativos = {
    "+1": "US",  // Estados Unidos
    "+44": "UK", // Reino Unido
    "+86": "CN", // China
    "+81": "JP", // Japón
    "+49": "DE", // Alemania
    "+33": "FR", // Francia
    "+39": "IT", // Italia
    "+7": "RU",  // Rusia
    "+91": "IN", // India
    "+52": "MX", // México
    "+54": "AR", // Argentina
    "+55": "BR", // Brasil
    "+56": "CL", // Chile
    "+57": "CO", // Colombia
    "+58": "VE", // Venezuela
    "+51": "PE", // Perú
    "+593": "EC", // Ecuador
    "+502": "GT", // Guatemala
    "+503": "SV", // El Salvador
    "+505": "NI", // Nicaragua
    "+506": "CR", // Costa Rica
    "+507": "PA", // Panamá
    "+509": "HT", // Haití
    "+591": "BO", // Bolivia
    "+595": "PY", // Paraguay
    "+598": "UY", // Uruguay
    "+502": "GT", // Guatemala
    "+503": "SV", // El Salvador
    "+505": "NI", // Nicaragua
    "+506": "CR", // Costa Rica
    "+507": "PA", // Panamá
    "+509": "HT", // Haití
    "+591": "BO", // Bolivia
    "+595": "PY", // Paraguay
    "+598": "UY", // Uruguay
    "+501": "BZ", // Belice
    "+504": "HN", // Honduras
    "+509": "HT", // Haití
    "+597": "SR", // Surinam
    "+594": "GF", // Guayana Francesa
    "+599": "AN", // Antillas Neerlandesas
    "+501": "BZ", // Belice
    "+504": "HN", // Honduras
    "+506": "CR", // Costa Rica
    "+507": "PA", // Panamá
    "+51": "PE", // Perú
    "+56": "CL", // Chile
    "+593": "EC", // Ecuador
    "+597": "SR", // Surinam
    "+598": "UY", // Uruguay
    "+502": "GT", // Guatemala
    "+503": "SV", // El Salvador
    "+505": "NI", // Nicaragua
    "+591": "BO", // Bolivia
    "+595": "PY", // Paraguay
    "+598": "UY", // Uruguay
    "+58": "VE", // Venezuela
    "+509": "HT", // Haití
    "+592": "GY", // Guyana

    // Agrega más códigos de país según sea necesario
};

const selectIndicativo = document.getElementById("indicativo");

// Generar las opciones del menú desplegable
for (const codigo in indicativos) {
    const opcion = document.createElement("option");
    opcion.value = codigo;
    opcion.textContent = `${codigo} (${indicativos[codigo]})`;
    selectIndicativo.appendChild(opcion);
}
