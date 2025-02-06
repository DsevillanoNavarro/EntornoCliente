let inptTexto = document.getElementById("txtEntrada")

inptTexto.addEventListener('copy',nocopies)

function nocopies(event){
    event.preventDefault()
}