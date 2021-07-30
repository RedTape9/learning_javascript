"use strict";

let strname = "string name";        // Eine Zeichenkette als Eigenschaftsname

let symname = Symbol("propname")    // Ein Symbol als Eigenschaftsname

console.log(typeof strname);
console.log(typeof symname);

let o = {};                       // Ein neues Objekt erstellen.


o[strname] = 1;                   // Definieren einer Eigenschaft mit einem
                                  // Namen, der aus einer Zeichenkette besteht.
o[symname] = 2;                   // Definieren einer Eigenschaft mit einem
                                  // Namen, der aus einem Symbol besteht.


o[strname]                        // => 1: Zugriff auf die per Zeichenkette


// benannte Eigenschaft.


o[symname]                        // => 2: Zugriff auf die per Symbol benannte


// Eigenschaft.
