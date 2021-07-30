"use strict";

let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

// const copy = obj;

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// Hier werden oberflächliche Kopien von Objekten erstellt, 
// heißt nur die obersten Ebenen im Objekt werden kopiert. 
// Objekte in Objekten werden dagegen nur verlinkt.

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {  // Eigenschaftsnamen von mainObj der Variablen key zuweisen.
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: { // Achtung: Wenn das Objekt numbers kopiert wird, 
         // wird an dieser Stelle der Verweis auf das c Objekt kopiert, 
         // NICHT das c Objekt selbst. Heißt wenn die Eigenschaften von 
         // c sich später ändern, so ändern sie sich bei beiden Objekten 
         // (da nur ein Link/Verweis)
        x: 7,
        y: 4
    }
}

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 99;
console.log(numbers);
console.log(newNumbers);

// weiter Methode der oberflächlichen Kopie von Objekten

const add = {
    d: 17,
    e: 20
}

const target = {};

console.log(Object.assign(target, add)); // Das add Objekt wird oberflächlich in 
                                         // das target Objekt kopiert und das target 
                                        // Objekt zurückgegeben.

console.log(Object.assign(target, numbers)); // das vorherige numbers Objekt wurde 
                                             // ebenfalls in das target Objekt kopiert
                                             // (hinten drangehängt).

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'something new';
console.log(newArray);
console.log(oldArray);

// neue Methode object spread property aus ES6 für Arrays und ab ES9 auch für Objekte

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);


function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ['a', 'b'];

const secondArray = [...array];

// das Ganze mit Objekten
const newObject = {
    one: 1,
    two: 2
};

const newObject2 = {...newObject};

console.log(newObject2);