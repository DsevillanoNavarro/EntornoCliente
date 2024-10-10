//Realizar un programa que liste los 100 primeros números primos.

function imprimePrimo() {
  let salida = "";
  
  for (let i = 0; i <= 100; i++) {
    let divisibles = 0;
    for (let x = 0; x <= i; x++) {
      if((i%x)== 0 || i == 1){
        divisibles++;
      }
    }
    if(divisibles == 2){
      salida += "<br> " + i;
    }
    
  }

  document.getElementById("salida").innerHTML= salida;
}
