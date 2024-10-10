//Desarrollar un programa que permita la carga de 5 valores 
//por teclado utilizando una única variable 
//para dichos valores y nos muestre posteriormente la suma.

let suma =0;
for (let index = 0; index < 5; index++) {

    let numeros = Number(prompt("Dime un número"));
    suma += numeros;
}

alert("La suma de los numeros es: "+suma);