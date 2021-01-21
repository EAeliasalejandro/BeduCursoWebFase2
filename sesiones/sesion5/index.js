//Constructores
/*var Person = function (name, birthYear, job) {
    this.name = name;
    this.birthYear = birthYear;
    this.job = job;
}
var john = new Person('John', 1998, 'Developer');
var mark = new Person('Mark', 1985, 'Teacher');
var jane = new Person('Jane', 1975, 'Designer');*/

//reto1 usar prototype
/*var Vec = function (x, y) { //Vector de dos dimensiones
    this.x = x;
    this.y = y;
}
Vec.prototype.plus = function (vectorB) {
    newX = this.x + vectorB.x;
    newY = this.y + vectorB.y;
    return new Vec(newX, newY);
}
Vec.prototype.minus = function (vectorB) {
    newX = this.x - vectorB.x;
    newY = this.y - vectorB.y;
    return new Vec(newX, newY);
}
Vec.prototype.length = function () {
    return Math.hypot(this.y, this.x);
}

var vec1 = new Vec(1, 2);
var vec2 = new Vec(2, 3);
console.log(vec1.plus(vec2)); // Vec { x: 3, y: 5 }
console.log(vec1.minus(vec2)); // Vec { x: -1, y: -1 }
console.log(vec1.length()); // 2.23606797749979*/

//Herencia
/*var Person = function (name) {
    this.name = name;
}

var Developer = function (name, skills, yearsOfExperience) {
    Person.call(this, name);

    this.skills = skills;
    this.yearsOfExperience = yearsOfExperience;
}

var john = new Developer('John', 'JavaScript', 10);

console.log(john);*/

//Reto2
/*var Group = function () {
    this.members = [];
}
Group.from = function (arr) {
    var nuevoObj = new Group();
    arr.forEach(element => {
        nuevoObj.members.push(element);
    });
    return nuevoObj;
    ;
}
Group.prototype.has = function (num) {
    var arrBool = false;
    this.members.forEach(element => {
        element == num ? arrBool = true : false;
    });
    return arrBool;
}
Group.prototype.add = function (num) {
    this.members.push(num);
}

var group = Group.from([1, 2, 3, 4, 5]);
console.log(group); // Group { members: [ 1, 2, 3, 4, 5 ] }
console.log(group.has(5)); // true
console.log(group.has(10)); // false
group.add(10);
console.log(group.has(10)); // true*/

//Heredar metodos
/*var Person = function (name, birthYear, job) {
    this.name = name;
    this.birthYear = birthYear;
    this.job = job;
}

Person.prototype.calculateAge = function () {
    var today = new Date();
    var year = today.getFullYear();
    console.log(year - this.birthYear);
}

var john = new Person('John', 1990, 'Developer');
var mark = new Person('Mark', 1985, 'Teacher');
var jane = new Person('Jane', 1975, 'Designer');

john.calculateAge();
mark.calculateAge();
jane.calculateAge();*/

//Reto 3
var Triangle = function (a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
}

Triangle.prototype.getPerimeter = function () {
    return this.a + this.b + this.c;
}

var triangle = new Triangle(1, 2, 3);

console.log(triangle); 
// Triangle { a: 1, b: 2, c: 3 }
console.log(triangle.getPerimeter()); 
// 6