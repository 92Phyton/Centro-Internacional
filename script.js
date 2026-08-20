function mostrarContenido(id) {

    const contenido = document.getElementById(id);

    if (contenido.style.display === "block") {
        contenido.style.display = "none";
    } else {

        // Ocultar los demás contenidos
        document.querySelectorAll(".contenido").forEach(function(elemento) {
            elemento.style.display = "none";
        });

        // Mostrar el seleccionado
        contenido.style.display = "block";
    }
}
function mostrarContenido(id) {
    const contenidoSeleccionado = document.getElementById(id);

    // Revisamos si el contenido seleccionado ya está abierto
    const estaAbierto =
        contenidoSeleccionado.style.display === "block";

    // Cerramos todos los contenidos
    document.querySelectorAll(".contenido").forEach(function(elemento) {
        elemento.style.display = "none";
    });

    // Si estaba cerrado, lo abrimos
    if (!estaAbierto) {
        contenidoSeleccionado.style.display = "block";

        // Animación nueva cada vez que se abre
        contenidoSeleccionado.style.animation = "none";

        setTimeout(function() {
            contenidoSeleccionado.style.animation =
                "aparecerContenido 0.5s ease";
        }, 10);

        // Llevar suavemente hacia el contenido
        contenidoSeleccionado.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }
}
