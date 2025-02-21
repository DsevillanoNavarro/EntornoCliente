function addManejador(){
    document.getElementById("botonMarcar").addEventListener('click', btnCheck)
}
function deleteManejador(){
    document.getElementById("botonMarcar").removeEventListener('click', btnCheck)
}
function btnCheck(){
    if(formulario.verano.checked){
        formulario.verano.checked = false
    }else{
        formulario.verano.checked = true
    }
}