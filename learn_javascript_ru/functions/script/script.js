'use strict';
/* function showMessage(from, text) {  // Übergebene Argumente: from, text
    console.log(from + ': ' + text);
}

showMessage('Anja', 'Hallo!');         // Anja: Hallo!
showMessage('Anja', 'Wie gehts?');   // Anja: Wie gehts? */

/* function showMessage(from, text) {
    from = '*' + from + '*';        // Verschönern einwenig from

    console.log( from + ': ' + text);
}

let from = "Sofia";

showMessage(from, "Hallo");     //  *Sofie*: Hallo
console.log(from);                    // der Wert von from ist der alte geblieben, 
                                // die Funktion showMessage hat nur die lokale 
                                // Variable verändert.


 */

function showMessage(from, text = "default Text") {
    console.log( from + ": " + text );
}

showMessage("Аня"); // Аня: default Text

function sum(a, b) {

    return a + b;
}

let neu = sum(1, 2);
console.log( neu );     // 3