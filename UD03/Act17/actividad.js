/*Realiza un programa que pregunte una letra de la A a la Z.
 Tras ello el programa indicará cuántos DNIs de 3 cifras (del 001 al 999)
  tienen esa letra y tras ello te mostrará “de golpe” el listado de todos 
  los DNIs que tienen esa letra.
*/
let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
let datoLetra = prompt("DIME UNA LETRA DE DNI");
let totalDNI = 0;
let posiblesDNI = []

for(i=0;i<=999;i++){
  if((i%23)==letras.indexOf(datoLetra)){
  totalDNI++;
  posiblesDNI.push(i)
  }
}
console.log(totalDNI);
console.log(posiblesDNI);