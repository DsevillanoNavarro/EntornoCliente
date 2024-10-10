//Realizar un programa que lea por teclado dos números, si
//el primero es mayor al segundo informar su suma y diferencia, 
//en caso contrario informar el producto 
//y la división del primero respecto al segundo.

let num1 = Number(prompt("Dime un numero"));
let num2 = Number(prompt("Dime otro numero"));

if (num1 > num2) {
    let suma = num1 + num2;
    let diferencia = num1 - num2;
    alert("La suma de los 2 es: "+ suma);
    alert("La diferencia de los 2 es: "+ diferencia);
}else{
    let multiplicacion = num1 + num2;
    let division = num1 - num2;
    alert("La multiplicacion de los 2 es: "+ multiplicacion);
    alert("La division de los 2 es: "+ division);
    

}
