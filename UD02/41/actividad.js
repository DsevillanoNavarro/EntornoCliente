//Elaborar una función a la cual le enviemos tres enteros y muestre el menor.

function imprimeMenor() {
  let num1 = Number(frmMenor.num1.value);
  let num2 = Number(frmMenor.num2.value);
  let num3 = Number(frmMenor.num3.value);
  let salida = 0;
  if ((num1 > num2) && (num2 > num3)) {
    salida = num3;
  }
  if ((num3 > num2) && (num2 > num1)) {
    salida = num1;
  }
  if ((num2 < num1) && (num2 < num3)) {
    salida = num2;
  }
  
  

  document.getElementById("salida").innerHTML = salida;
}
