let cuadrado = document.getElementById("cuadrado")
let entrada = document.getElementById("txtEntrada")
entrada.addEventListener('keydown',ponerTecla)
cuadrado.addEventListener('mouseover',colorear)
cuadrado.addEventListener('mouseout',desColorear)
cuadrado.addEventListener('mousemove',coordenadas)
function colorear(){
    cuadrado.classList = "amarillo"
    
}
function desColorear(){
    cuadrado.classList = ""
    document.getElementById("salida").innerHTML= ""
}
function coordenadas(event){
   
    document.getElementById("salida").innerHTML= "X: " + event.clientX + "Y: " + event.clientY
}
function ponerTecla(event){
    document.getElementById("salida").innerHTML= event.key
}