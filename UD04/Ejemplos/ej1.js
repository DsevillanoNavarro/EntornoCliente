const obj1 = {};

console.log(obj1);

obj1.nombre = "Juan";
console.log(obj1);

obj1.apellido = "Pérez";
console.log(obj1);

obj1.edad = 30;
console.log(obj1)
console.log("Nombre: " + obj1.nombre + ", Apellido: " + obj1.apellido + ", Edad: " + obj1.edad);

function persona(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;    
}

let persona1 = new persona("Juan", "Pérez", 30);
let persona2 = new persona("Pepe", "Sevillano", 32);

for (let clave in obj1) {
    console.log(obj1[clave])
}
const t = [35,12,3,4];

for (let clave in t){
    console.log(t[clave])
}


