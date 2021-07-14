"use strict";

// const options = new Object(); // seltene Schreibweise, wird kaum verwendet. Besser siehe unten:

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Test");
    }
};

options.makeTest();

// HIER FINDET DIE DISTRUKTURISIERUNG STATT: wir entnehmen Inhalte aus einem Objekt in einem Objekt
const {border, bg} = options.colors;
console.log(border);

console.log(Object.keys(options).length); // Hier erstellen wir aus dem Objekt einen Array,
                                          // bei dem wir wiederum mit .length die Anzahl der 
                                          // Elemente bestimmen können. Das ist gängige Praxis!


console.log(options.name);
// console.log(options["colors"]["border"]); // Alternativer Abruf eier Objekteigenschaft 
                                             // in einem anderen Objekt
// delete options.name; // Entfernt Objekteigenschaften

let counter = 0; // Objekte haben keine funktion length, weshalb wir z.B. mit einem counter abzählen 
                 // können, wieviele Eigenschaften enthalten sind

for (let key in options) { // for (... in ...) durchläuft den Gesamtinhalt des Objekts
    if (typeof(options[key]) === 'object') {
        for ( let i in options[key]) {
            console.log(`Objekteigenschaft ${i} hat den Inhalt ${options[key][i]}`);
            counter++;
        } 
    }
    else {
        console.log(`Objekteigenschaft ${key} hat den Inhalt ${options[key]}`);
        counter++;
    }    
}
console.log(`Das Objekt options hat ${counter} Eigenschaften`);