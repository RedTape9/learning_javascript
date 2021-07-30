"use strict";



let text = "testing: 1, 2, 3";   // Beispieltext.


let pattern = /\d+/g;            // Findet alle Vorkommen einer oder mehrerer Ziffern.

console.log(pattern.test(text)); // => true: Es gibt einen Treffer.


console.log(text.search(pattern) );            // => 9: Position des ersten Treffers.


console.log(text.match(pattern));              // => ["1", "2", "3"]: Das Array mit allen Treffern.

console.log(text.replace(pattern, "#") ); // => "testing: #, #, #"


console.log(text.split(/\D+/));                // => ["","1","2","3"]: An Nicht-Ziffern aufgetrennt.


