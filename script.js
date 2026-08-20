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
