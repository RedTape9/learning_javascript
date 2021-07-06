"use strict";

// auch Bruchzahlen mit Punkt statt Komma
let number = 4;

console.log(-4/0);          // - Infinity
console.log('string' * 9);  //Not a Number

const persone = `Alex`;

const bool = true;

// console.log(something);

let und;
console.log(und);

// Objekt
const obj = {
    name: "John",
    age: 25,
    isMarried: false
};

console.log(obj.name);
// console.log(obj["name"]); // Besser mit Punkt selektieren

// Array-Objekt  Nr 0        1               3       4   5
let arr = ['apple.jpeg', 'orange.png', 'plum.bmp', {}, []];
console.log(arr[0]);
