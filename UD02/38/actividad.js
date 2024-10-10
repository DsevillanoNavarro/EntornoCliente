//Realizar un programa que al introducir un número
//por teclado nos diga si es primo o no.

function imprimePrimo() {
  let numero = Number(frmCompruebaPrimo.numero.value);
  let salida = false;
  let divisibiles = 0;
  for (let i = 0; i <= numero; i++) {

    if((numero % i) == 0){
      divisibiles++;
    }
    
  }
  if(divisibiles == 2){
    salida = true;
  }
  document.getElementById("salida").innerHTML = salida;
}
