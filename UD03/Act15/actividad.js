/*Realiza un programa que cada 20 segundos (mediante setInterval) 
solicite un DNI hasta que alguien le escriba la cadena “-1”.
En ese momento, el programa debe mostrar seguidas las letras
de todos los DNIs introducidos. Aquí un enlace para saber como
calcular la letra de DNI.
*/
let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
let numeros = [];

function pideDNI(){

  let dniNuevo = prompt("DIME UN DNI")
  if(dniNuevo == "-1"){
    for(i=0;i<=numeros.length;i++){
      console.log(letras[numeros[i]%23]);
    }

  }else{
    numeros.push(dniNuevo);
  }

}

let hola = window.setInterval(pideDNI,5000)