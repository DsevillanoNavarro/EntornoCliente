/*Crear un script que muestre mediante un mensaje la fecha actual 
(día, mes en letra y año), la hora actual (hora y minutos), 
el día de la semana (en letra) 
o los tres anteriores a la vez, según elija el usuario.
*/
function imprimeFecha() {
  let fecha = new Date();
  let mesLetra = "";
  switch (fecha.getMonth()) {
    case 0:
      mesLetra = "Enero";
      break;
    case 1:
      mesLetra = "Febrero";
      break;
    case 2:
      mesLetra = "Marzo";
      break;
    case 3:
      mesLetra = "Abril";
      break;
    case 4:
      mesLetra = "Mayo";
      break;
    case 5:
      mesLetra = "Junio";
      break;
    case 6:
      mesLetra = "Julio";
      break;
    case 7:
      mesLetra = "Agosto";
      break;
    case 8:
      mesLetra = "Septiembre";
      break;
    case 9:
      mesLetra = "Octubre";
      break;
    case 10:
      mesLetra = "Noviembre";
      break;
    case 11:
      mesLetra = "Diciembre";
      break;
    default:
      break;
  }
  document.getElementById("salida").innerHTML =
    fecha.getDate() + " " + mesLetra + " " + fecha.getFullYear();
  return fecha.getDate() + " " + mesLetra + " " + fecha.getFullYear();
}
function imprimeDia() {
  let fecha = new Date();
  let diaSem = "";
  switch (fecha.getDay()) {
    case 0:
      diaSem = "Domingo"
      break;
    case 1:
      diaSem = "Lunes"
      break;
    case 2:
      diaSem = "Martes"
      break;
    case 3:
      diaSem = "Miercoles"
      break;
    case 4:
      diaSem = "Jueves"
      break;
    case 5:
      diaSem = "Viernes"
      break;
    case 6:
      diaSem = "Sábado"
      break;

    default:
      break;
  }
  document.getElementById("salida").innerHTML = diaSem;
  return diaSem;
}
function imprimeHora() {
  let fecha = new Date();
  document.getElementById("salida").innerHTML =
    fecha.getHours() + ":" + fecha.getMinutes();
  return fecha.getHours() + ":" + fecha.getMinutes();
}
function imprimeTodo() {
  let fechaTotal = imprimeFecha();
  let fechaDia = imprimeDia();
  let fechaHora = imprimeHora();

  document.getElementById("salida").innerHTML= fechaTotal + "<br>"+fechaDia + "<br>"+fechaHora; 
}
