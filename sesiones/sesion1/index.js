
var a = 5;
var b = 10;
var c = 15;
var resultado = 0;

let resultado1 = (3 + b) * c / a * 2;
console.log("Resultado 1: "+resultado1);
let resultado2 = ((a + b * c) / 5) * 2;
console.log("Resultado 2: "+resultado2);
let resultado3 = b / a + 2 * c;
console.log("Resultado 3: "+resultado3);
let resultado4 = (a + b + c / c) * a;
console.log("Resultado 4: "+resultado4);
let resultado5 = ((3 * a) / c) + a + b + c;
console.log("Resultado 5: "+resultado5);
let resultado6 = a - (b + c) * a / 1;
console.log("Resultado 6: "+resultado6);

resultado = resultado2 + resultado3 + resultado4 + resultado5 + resultado6 + resultado1;

console.log("La sumatoria de los resultados es: " + resultado);