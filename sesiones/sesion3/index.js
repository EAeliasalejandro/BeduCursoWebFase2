//Declaración de función o Sentencia de función
/*function calculateAge(birthYear) {
    var age = 2021 - birthYear;
    return age;
}

var elias = calculateAge(1998);
console.log("La edad de Elías es: " + elias);
yearsUntilRetirement(1998, "Elías");

function yearsUntilRetirement(birthYear, name) {
    var age = calculateAge(birthYear);
    var retirement = 65 - age;
    console.log(name + ' retires in ' + retirement + ' years.');
}

function power(base, exponent) {
    var resultado = 1;
    for (let i = 0; i < exponent; i++) {
        resultado = base * resultado;
        //resultado *= base; es lo mismo
    }
    return resultado;
}
console.log(power(3, 3));*/

//Expresión de Función
/*var whatDoYouDo = function (job, name) {
    switch (job) {
        case 'developer':
            return name + ' develops cool apps';
        case 'designer':
            return name + ' designs awesome apps';
        default:
            return name + ' does something else';
    }
}

console.log(whatDoYouDo('developer','elias'));
console.log(whatDoYouDo('designer','juan'));
console.log(whatDoYouDo('retired','elias'));*/

//IIFE sin args
/*(function () {
    var name = "Jhon Doe";
    console.log(name);
})();

//IIFE con args
(function (lastName) {
    var name = "Jhon " + lastName;
    console.log(name);
})("Doe con args");

function contar(inicio, final) {
    var resultado = 0;
    for (let i = 0; i < final; i++) {
        resultado = i;
    }
    return resultado;
}
console.log(contar(23, 39));*/

//Retos
/*function getLergerInt(number1, number2) {
    var mayor = number1 > number2 ? number1 : number2;
    return mayor;
}
console.log(getLergerInt(4, 5));
console.log(getLergerInt(8, 5));
console.log(getLergerInt(3, 3));*/

//fibonacci
function fibonacciSequence(limit) {
    if (limit < 1) return console.log('Debe ser mayor a 0');
    var siguiente = 0;
    var actual = 1;
    var anterior = 1;

    for (var i = 0; i < limit; i++) {
        siguiente += anterior; //siguiente = siguiente + anterior; = 1
        console.log(actual); //imprime: 
        anterior = actual;//anterior = 1
        actual = siguiente;//actual = 0
    }
}

fibonacciSequence(7);