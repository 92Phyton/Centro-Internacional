function mostrarContenido(id) {
    const contenido= document.getElementById(id);
    if (contenido.style.display==="block"){
        contenido.style.display="none";
    }else{
        contenido.style.display="block";
    }
        
}