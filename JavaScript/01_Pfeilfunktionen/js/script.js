"use strict";

let x = 2, y = 3;

function plus1(x) {
    // Funktion mit dem Namen "plus1" und dem Parameter "x" definieren.
    return x + 1;
}

const neu = plus1(y);
console.log(neu);

// kürzere Schreibweise mit der Pfeilfunktion
const plus2 = x => x + 2;
const neu2 = plus2(x);
console.log(neu2);