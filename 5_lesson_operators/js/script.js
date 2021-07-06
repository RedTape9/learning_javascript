"use strict";

console.log('arr' + "- object");
console.log(4 + "5");
console.log(4 + +"5");

let incr = 10,
    decr = 10;

// incr++;
// decr--;

console.log(--incr); //prefix
console.log(decr++); //postfix

console.log(5%2); //modulo

console.log(2*4 == '8'); // hier wird nach dem Inhalt nicht nach dem Datentyp verglichen, weshalb: true
console.log(2*4 === 8);  // hier wiederum wird auch auf den Datentyp Wert gelegt, Ergebnis: true

// &&  und-Operator
// ||  oder-Operator

const isChecked = true,
      isClosed = true;

console.log(isChecked && isClosed); // beides ist true, weshalb: true
