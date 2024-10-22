/*Elaborar un script que reciba un array con valores
numéricos y devuelva otro array que contenga ordenados 
por un lado los números impares y por otro lado los pares. 
Si el número de elementos es impar, primero irán los impares 
ordenados y luego los pares ordenados;
si el número es par, al contrario.
*/
let miArrayNormal = [1, 6, 8, 54, 3, 2, 6, 7, 10, 9, 51,50];
let devolver = [];

if (miArrayNormal.length % 2 != 0) {
  function ordenaArrayImp(a, b) {

    if(a%2 == 0 && b%2 != 0){
    return 1}
    else{
      return -1
    }
    
  }
} else {
  function ordenaArrayPar(a, b) {
    if(a%2 == 0 && b%2 != 0){
      return -1}
      else{
        return 1
      }

  }
}
devolver = miArrayNormal.sort(ordenaArrayImp)
console.log(devolver);