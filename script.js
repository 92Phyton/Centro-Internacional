function mostrarContenido(id) {

    const contenidoSeleccionado = document.getElementById(id);

    // Revisar si el contenido seleccionado está abierto
    const estaAbierto =
        contenidoSeleccionado.style.display === "block";


    // Si está abierto, cerrarlo con animación
    if (estaAbierto) {

        contenidoSeleccionado.style.animation =
            "ocultarContenido 0.5s ease forwards";

        // Esperar que termine la animación antes de ocultarlo
        setTimeout(function() {
            contenidoSeleccionado.style.display = "none";
            contenidoSeleccionado.style.animation = "";
        }, 500);

    } else {

        // Buscar todos los contenidos
        document.querySelectorAll(".contenido").forEach(function(elemento) {

            // Cerrar los otros contenidos que estén abiertos
            if (elemento.style.display === "block") {

                elemento.style.animation =
                    "ocultarContenido 0.5s ease forwards";

                setTimeout(function() {
                    elemento.style.display = "none";
                    elemento.style.animation = "";
                }, 500);
            }
        });


        // Esperar un poco antes de mostrar el nuevo contenido
        setTimeout(function() {

            contenidoSeleccionado.style.display = "block";
            contenidoSeleccionado.style.animation =
                "aparecerContenido 0.5s ease";

            // Llevar suavemente hacia el contenido
            contenidoSeleccionado.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 500);
    }
}