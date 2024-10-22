/*Crear un script que reciba dos fechas y diga cuál es anterior 
y el tiempo transcurrido entre ellas (en años, meses y días).
*/
let parado = false
let ms = 0;
let s = 0;
let m = 0;
let intervalo;
document.getElementById("salida").innerHTML = "0:0:0"
function resetear() {
  document.getElementById("salida").innerHTML = "0:0:0"
}
function empezarParar(){
  
  ms++;
  if(ms == 10){
    ms = 0
    s++;
  }
  if(s == 60){
    s = 0
    m++;
  }
  document.getElementById("salida").innerHTML = m + ":" + s + ":" + ms;
  
  parado = true;
}
function btnSeleccionado(){
  
  if (parado== true){
  clearInterval(intervalo);
  parado= false
  }
  else{
  ms = 0;
  m = 0;
  s = 0;
  intervalo = window.setInterval(empezarParar,100);
  parado = true
  }

}