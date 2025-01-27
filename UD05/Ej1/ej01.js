formulario.consultar.addEventListener('click', mostrarDatos)

function mostrarDatos(){
    if(formulario.actor1.checked){
        console.log(formulario.actor1.value)
    }else{
        if(formulario.actor2.checked){
            console.log(formulario.actor2.value)
        }else{
            if(formulario.actor3.checked){
                console.log(formulario.actor3.value)
            }
        }
    }
}