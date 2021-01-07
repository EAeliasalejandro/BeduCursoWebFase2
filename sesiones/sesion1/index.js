
// Numbers
console.log(typeof 10);	// "number"
console.log(typeof 12.5);	// "number"
console.log(typeof 2.5e+6);	// "number"
console.log(typeof Infinity);	// "number"
console.log(typeof NaN);	// "number"

// Strings
console.log(typeof ' ');	// "string" - Espacios en blanco cuentan como caracteres
console.log(typeof 'Hello World');	// "string"
console.log(typeof '12');	// "string" - Números dentro de comillas son strings

// Booleans
console.log(typeof true);	// "boolean"
console.log(typeof false);	// "boolean"

// Undefined
console.log(typeof undefined);	// "undefined"

var name;
console.log(typeof name); // "undefined" - Aún no se asigna un valor

// Null
console.log(typeof Null);	// "object"