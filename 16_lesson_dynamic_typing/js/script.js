"use strict";

// To String

// 1) Typecasting

console.log(typeof(String(null)));
console.log(typeof(String(4)));

// 2) Konkatenation (Wandlung in String)
console.log(typeof(5 + ''));
console.log(null + '');

const num = 5;
console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px';

// Wandlung in Number
console.log(typeof(Number('4')));
// besser aber
console.log(typeof(+'5'));

let str = "15px";
console.log(typeof(parseInt(str, 10)));
let d = parseInt(str, 10);
console.log(d);

// 3)

let answ = +prompt("Hello", "");

// to boolean
// 1)
// zu false gewandelt wird:
// 0, '', null, undefined, NaN
// alles andere wird zu true

let switcher = null;

if (switcher) {
    console.log('Working...');
}

switcher = 1;
if (switcher) {
    console.log('Working....');
}

// 2) selten verwendet
console.log(typeof(Boolean('4')));

// 3) 
console.log(typeof(!!"44444"));

