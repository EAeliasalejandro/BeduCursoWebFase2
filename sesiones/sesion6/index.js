//Clonar objeto
/* function addColor(car) {
    var newCar = Object.assign({}, car, {//clonar objeto
        color: 'black'
    });
    return newCar;
}

var car = {
    brand: 'nisan',
    model: 'sentra',
    year: 2021
}
console.log("antes de llamar add color", car);
var sameCar = addColor(car);
console.log("despues de llamar add color", car);
console.log("NuevoCarro", sameCar); */

//funcion pura
/* var cart = [
    {
        item: 'Laptop',
        quantity: 1
    }
]
function addItemToCart(cart, item, quantity) {
    var newCart = cart.map(function (element) {
        return element;
    });

    newCart.push({
        item: item,
        quantity: quantity
    })

    return newCart;
}
cart = addItemToCart(cart, 'Phone', 1);

console.log(cart); //[{item: "laptop", quantify: 1"},{item: "Phone", quantify: 1}] */


//funciones de primera clase
/*
var square = function (number) {
    return number * number;
}

var squareOfFour = square(4);

console.log(squareOfFour); // 16*/

//Ejemplo de metodos para arreglos
/* function sumDigits(number) {
    return number
        .toString()
        .split('')
        .map(Number)
        .reduce(function (a, b) {
            return a + b;
        }, 0)
}

console.log(sumDigits(12345)); // 15 */

//Reto 1
/* function flatten(arrays) {
    return arrays.toString().split(',').map(Number);
}

var arrays = [[1, 2, 3], [4, 5], [6]];
var array = flatten(arrays);
console.log(array); // [1, 2, 3, 4, 5, 6] */

//Reto 2
/* function compact(array) {
    return array.filter(function (elemento) {
        return elemento != false;
    });
}

var array = [0, 1, false, 2, '', 3];
var compactedArray = compact(array);

console.log(compactedArray); // [1, 2, 3] */

//Reto3
/* function loop(start, test, update, body) {
    var startAct;
    if (test(start)) {
        body(start);
        startAct = update(start);
        loop(startAct, test, update, body);
    }
}

var test = function (n) {
    return n > 0;
}

var update = function (n) {
    return n - 1;
}

loop(3, test, update, console.log); */
  // 3
  // 2
  // 1