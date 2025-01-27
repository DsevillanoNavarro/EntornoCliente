let inptTexto = document.getElementById("txtEntrada");
inptTexto.addEventListener('keydown',presionaLetra);

function presionaLetra(event){
    if(!isNaN(event.key)){
        event.preventDefault()
    }
    
}