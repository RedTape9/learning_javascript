"use strict";

// zu den JavaScript-Anweisungen gehören auch bedingte Anweisungen und Schleifen

let x = 2,
    y = 3;

function abs(x) {
    // Eine Funktion zur Berechnung des Absolutbetrags.
    if (x >= 0) {
        // Die If-Anweisung führt diesen Code aus, wenn der Vergleich wahr ist.
        return x;
    } // Ende der if-Anweisung
    else {
        // die optionale else- Anweisung führt den in ihr enthaltenen Code aus,
        // wenn der Vergleich falsch ist
        return -x;
    } // geschweifte Klammern sind optional, wenn es nur eine Anweisung gibt.
}

const test = abs(-10) === abs(10);
console.log(test);

// Array erstellen
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Funktion zur Berechnung der Summe der Elemente eines Arrays

function sum(array) {
    let sum = 0;
    // Beginnt mit der Anfangssumme von 0.
    for (let x of array) {
        // Schleife über das Array, wobei jedem Element x zugeordnet wird.
        sum += x; // Aktuellen Elementwert der Summe hinzufügen.
    }
    // Das Ende der for-Schleife.

    return sum; // Die Summe zurückgeben.
}

console.log(sum(arr));

// Eine Funktion zur Berechnung von Fakultäten.
function factorial(n) {
    let product = 1; // Beginne mit dem Produkt von 1.

    while (n > 1) {
        // Solange der Ausdruck wahr ist, wird die Anweisung wiederholt.
        product *= n;
        // Kurzform für product = product * n.
        n--;
        // Kurzform für n - 1.
    }
    return product; // Rückgabe des Produkts.
}

// Testet
console.log(factorial(4)); // 24: 1*4*3*2

// Eine Alternative Version mit for-Schleife.
function facturial2(n) {
    let i, product = 1; // Beginne mit 1.
    for (i = 2; i <= n; i++)
        // i automatisch von 2 bis n inkrementieren.
        product *= i; // {} werden für Einzeilige Schleifen nicht benötigt.

    return product;
}

// Testen
console.log(facturial2(5)); // 120: 1*2*3**4*5