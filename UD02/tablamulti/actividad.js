function imprimeTablaMultiplicar() {
  let salida = "";
  let numero = Number(frmTablaMultiplicar.numero.value);
  for (let index = 0; index < 10; index++) {
    salida += numero + " x " + index + " = " + numero * index + "<br>";
  }
  document.getElementById("salida").innerHTML = salida;
}
