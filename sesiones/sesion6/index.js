//
/*function addItemToCart(cart, item, quantity) {
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

console.log(cart); //[{item: "laptop", quantify: 1"},{item: "Phone", quantify: 1}]
*/

//funciones de primera clase
/*
var square = function (number) {
    return number * number;
}

var squareOfFour = square(4);

console.log(squareOfFour); // 16*/

//Ejemplo de metodos para arreglos
/*
function sumDigits(number) {
    return number
        .toString()
        .split('')
        .map(Number)
        .reduce(function (a, b) {
            return a + b;
        }, 0)
}

console.log(sumDigits(12345)); // 15*/

//Reto 1
function flatten(arrays) {
    var arreglo = arrays.toString().split(',').map(Number);
    return arreglo;
}

var arrays = [[1, 2, 3], [4, 5], [6]];
var array = flatten(arrays);
console.log(array); // [1, 2, 3, 4, 5, 6]