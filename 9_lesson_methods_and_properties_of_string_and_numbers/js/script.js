"use strict";

const str = "test";
const arr = [1, 2, 4];

console.log(arr.length);
console.log(str[2]); // Ausgabe: s

console.log(str.toUpperCase());

let fruit = "Some fruit";

console.log(fruit.indexOf("fruit")); // Ausgabe: 5 ==> Abschnitt fängt an der 5 Position an.

const logg = "Hallo world";

console.log(logg.slice(6, 11)); // Scheidet aus dem String von der Stelle 6 (erster Wert 0) bis 11 aus.

console.log(logg.substring(5, 0)); // ähnlich wie slice, nur kann hier auch erst der höhere Wert stehen.

console.log(logg.substr(6, 5)); // hier gibt der zweite Parameter an wie viele Werte rausgeschnitten werden.

let num = 12.2;
console.log(Math.round(num));

let test = "12.7px";
console.log(Math.round(test.slice(0,4)));
console.log(Math.round(parseFloat(test)));
