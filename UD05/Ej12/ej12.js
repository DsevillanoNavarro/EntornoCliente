let campo = formulario.txtTexto
let boton = formulario.btnAceptar

boton.addEventListener('click', alertas)

function alertas(event){
    if(campo.value == ""){
        event.preventDefault()
        alert("EL FORMULARIO ESTÁ VACIO")
    }

}

