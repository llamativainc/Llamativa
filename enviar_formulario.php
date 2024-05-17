<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $telefono = $_POST["telefono"];
    $mensaje = $_POST["mensaje"];

    $destinatario = "llamativa.inc@gmail.com";
    $asunto = "Nuevo mensaje de contacto desde el sitio web";
    $contenido = "Nombre: $nombre\n";
    $contenido .= "Email: $email\n";
    $contenido .= "Teléfono: $telefono\n";
    $contenido .= "Mensaje: $mensaje\n";

    $cabeceras = "From: $email";

    // Envía el correo electrónico
    mail($destinatario, $asunto, $contenido, $cabeceras);

    // Redirige al usuario a una página de confirmación
    header("Location: confirmacion.html");
    exit;
}
?>
