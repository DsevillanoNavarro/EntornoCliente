let formulario = document.getElementById("formulario")
formulario.addEventListener('click', alertas)

function alertas(event){
    alert("Target: "+event.target.tagName)
    alert("CurrentTarget: "+ event.currentTarget.tagName)
}

