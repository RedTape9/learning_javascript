"use strict";

const arr = [2, 13, 26, 8, 10];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}
//arr.pop(); // löscht das letzte Element im Array
//arr.push(10); // fügt ein Element an das Ende des Arrys an
//arr[99] = 0;

// Wandeln von String in Array und zurück.
let neu = "I love you!";
let toArray = neu.split(" ");
console.log(toArray);
let backToString = toArray.join(" ");
console.log(backToString);


console.log(arr.length); // duech den index auf 99 gibt uns .lengt hier 100 aus
                         // obwohl wir garnicht so viele Werte gespeichert haben
                         // = richtige Indexierung beachten!
                         //.length ergibt sich immer aus dem Index 
                         // des letzten Elementes + 1 
console.log(arr); // Ausgabe: [ 1, 2, 3, 4, 5, <94 empty items>, 0 ]
                  // daher sollte man immer die richtige Indexierung beachten!

arr.forEach(function(item, i, arr) { // item ist hier eine beliebige Bezeichnung für das jeweilige Element 
                                     // des Arrays, i der dazugehörige Index, arr ist der Verweis auf den Array
    console.log(`${i}: ${item} innerhalb des Arrays ${arr}`);
}
);



// arr.pop(); // .pop löscht das letzte Element aus dem Array
arr.push(10); // .push fügt ein Element an das Ende des Arrays hinzu

console.log(arr)

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let value of arr) {
    console.log(value);
} // diese Vorgehensweise hat den Vorteil dass hier break und continue 
  // eingesetzt werden können. Im Gegensatz zu forEach

const str = "I wanna rock!";
const produducts = str.split(" ");
console.log(produducts.join(' - '));
console.log(typeof(str));

