document.getElementById("teclado").addEventListener('click',ponerTecla)

function ponerTecla(event){

    if(event.target.tagName == 'INPUT'){
        document.getElementById("salida").value += event.target.value
    }

}