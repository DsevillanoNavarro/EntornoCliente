const p1  = new Producto('Producto 1', 10, 100);
const p2  = new Producto('Producto 2', 5, 200);

console.log(p1);
console.log(p2);

p1.incrementarStock(50);
console.log("Total inventario P1: "+p1.valorEnStock());

p2.incrementarStock(1500);
p2.precio = 12;
console.log(p2);
p2.disminuirStock(14000);