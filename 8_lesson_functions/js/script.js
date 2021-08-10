"use strict";

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    console.log(num);
}

showFirstMessage("Hallo World!");
console.log(num);

/* function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6)); */

function ret() {    // function declaration = werden schon erstellt bevor der Code ausgeführt wird.
    let num = 50;   // Können somit auch vor der Deklaration aufgerufen werden.

    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {  // function expression = werden erst nach Bekanntgabe (Deklaration)
    console.log("Hello");    // der Funktion aufgerufen.
};

const calc = (a, b) => { return a + b }; //Pfeilfunktion hat eine kürzere Syntax als ein Funktionsausdruck
                                        // und hat kein eigenes this, arguments, super, oder new.target. 
                                        // Solche Funktionsausdrücke sind am besten für Funktionen, 
                                        // die nicht als Methode genutzt werden, geeignet 
                                        // und können nicht als Konstruktoren verwendet werden.
console.log(calc(6, 8));