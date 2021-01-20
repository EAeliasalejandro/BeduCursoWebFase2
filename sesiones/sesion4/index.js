//Multiplica por dos los elementos de un arreglo
/*function multiplyByTwo(numbers) {
    var multipliedNumbers = [];

    for (var i = 0; i < numbers.length; i++) {
        multipliedNumbers.push(numbers[i] * 2);
    }
    return multipliedNumbers;
}
var input = [1, 3, 4, 7, 2, 1, 9, 0];

var output = multiplyByTwo(input);

console.log(input); // [1, 3, 4, 7, 2, 1, 9, 0]
console.log(output);  // [2, 6, 8, 14, 4, 2, 18, 0]
*/

//Sacar el promedio de un arreglo
/*function calculateAverage(numbers) {
    var sumaCal = 0;
    var promedio;
    for (let i = 0; i < numbers.length; i++) {
        sumaCal += numbers[i];
    }
    numbers.forEach(element => {
        sumaCal+=element;
    });
    promedio = sumaCal / numbers.length;
    return promedio.toFixed(2);
}
var numbers = [10, 8, 7, 9, 10,10];
console.log("El promedio es: " + calculateAverage(numbers));*/

//Funcion para crear un arreglo apartir de un objeto
/*var car = {
    brand: 'Nissan',
    model: 'Versa',
    year: 2020
}

function keyValuePairs(obj) {
    var keys = Object.keys(obj); //regresa un arreglo con las propiedades del objeto [brand,model,year]
    var pairs = [];

    for (var i = 0; i < keys.length; i++) {
        pairs.push([keys[i], obj[keys[i]]]); //pair[0] = [brand, obj.brand];
    }
    return pairs;
}
console.log(keyValuePairs(car));*/

//Funcion para crear un objeto apartir de un arreglo
/*var car = [['brand', 'Nissan'], ['model', 'Versa'], ['year', '2020']];
//          [0][0]    [0][1]     [1][0]    [1][1]    [2][0]    [2][1]
//       [fila][columna]
//     ['brand','Nissan']
//     ['model','Versa']
//     ['year','2020']
function objAarr(car) {
    var obj = {};
    var propiedad;
    var valor;
    for (var i = 0; i < car.length; i++) {
        propiedad = car[i][0];
        valor = car[i][1];
        obj[propiedad] = valor;//como no existe la crea, si existiera la propiedad entonces la cambia y setea
    }
    return obj;
}
var Car = objAarr(car);//ya objeto
console.log(Car);*/

//Funcion que setea una nueva propiedad
/*var john = {
    firstName: 'John',
    lastName: 'Doe',
    birthYear: 1990,
    calculateAge: function () {
        var today = new Date();
        var year = today.getFullYear();
        this.age = year - this.birthYear;
    }
}*/

//Mandar a pedir todos los valores de un array de objetos dependiendo de la propiedad
var singers = [
    { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
    { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
    { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
    { name: 'Chris Cornell', band: 'Soundgarden', born: 1964 },
];

function pluck(list, propertyName) {
    var resultado = [];
    for (let i = 0; i < list.length; i++) {
        //tiene que hacer la referencia así por que se manda un string
        resultado.push(list[i][propertyName]);//obj['name']
    }
    return resultado;
}

console.log(pluck(singers, 'name'));
// ["Steven Tyler", "Karen Carpenter", "Kurt Cobain", "Chris Cornell"]

console.log(pluck(singers, 'band'));
// ["Aerosmith", "The Carpenters", "Nirvana", "Soundgarden"]

console.log(pluck(singers, 'born'));
  // [1948, 1950, 1967, 1964]