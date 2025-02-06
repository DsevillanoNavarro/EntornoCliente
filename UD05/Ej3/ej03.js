formulario.boton.addEventListener('click', mostrarDatos)
function mostrarDatos(){
    for (datos of formulario.provincias.selectedOptions){
        console.log(datos.value)
    }

    
}