let documento = document.getElementById("body")
console.log(documento)
documento.addEventListener('click', izquierda)
documento.addEventListener('contextmenu', derecha)

function izquierda(event){
    event.preventDefault()
    document.getElementById("salida").innerHTML = "Click izq"
}

function derecha(event){
    event.preventDefault()
    document.getElementById("salida").innerHTML = "Click derecho"
}