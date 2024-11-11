const rect1 = new Rectangulo(5, 10);
const rect2 = new Rectangulo(8, 12);

console.log(`Area rectangulo 1: ${rect1.calculaArea()} + ${rect1.color}`);
rect1.color = 'azul';
console.log(`Area rectangulo 1: ${rect1.calculaArea()} + ${rect1.color}`);