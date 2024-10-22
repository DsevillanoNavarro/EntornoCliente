/*Crear un script que reciba dos fechas y diga cuál es anterior 
y el tiempo transcurrido entre ellas (en años, meses y días).
*/

function imprimeNombre() {
  let fecha = new Date();
  document.getElementById('salida').innerHTML = fecha.toLocaleTimeString();
  
  
}
imprimeNombre()
window.setInterval(imprimeNombre,1000); 