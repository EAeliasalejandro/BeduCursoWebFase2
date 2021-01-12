/*var time = 25;
var greeting;

if (time < 12 && time > 0) {
    greeting = "Good morning";
} else if (time < 20 && time > 0) {
    greeting = "Good afternoon";
} else if (time >= 20 && time <= 24) {
    greeting = "Good evening";
} else {
    greeting = "Dia no valido";
}
console.log(greeting);*/

/*var day = 1;
var text;
switch (day) {
    case 0:
        text = "Sunday";
        break;
    case 1:
        text = "Monday";
        break;
    case 2:
        text = "Tuesday";
        break;
    case 3:
        text = "Wednesday";
        break;
    case 4:
        text = "Thursday";
        break;
    case 5:
        text = "Friday";
        break;
    case 6:
        text = "Saturday";
        break;
    default:
        text = "error";
}
console.log(text);*/


/*
var speed = 90;
var message;
if (speed>100) {
    message="You're going too fast";
}else{
    message="Under the limit";
}
var message = speed > 100 ? "You're going too fast" : "Under the limit";
console.log(message);*/
var message = "hello world";
/*for (let i = 0; i < 5; i++) {
    console.log(message);
}
var i = 0;
while (i<10) {
    console.log(message);
    i++;
}

for (let i = 2; i <= 100; i = i + 2) {
    console.log(i);
}*/

for (var counter = 2; counter <= 100; counter++) {
    var isPrime = true;

    for (var i = 2; i <= counter; i++) {
        if (counter % i === 0 && i !== counter) {
            isPrime = false;
        }
    }

    if (isPrime) {
        console.log(counter);
    }
}