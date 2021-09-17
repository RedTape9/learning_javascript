'use strict';

let todoList = [];
function remember(task) {
    todoList.push(task);
}
function getTask() { // liest das erste Element aus dem Array aus und entfernt es.
    return todoList.shift();
}
function rememberUrgently(task) { // fügt eine weiteres Element an den Anfang des Arrays hinzu.
    todoList.unshift(task);
}

remember("cleaning");
remember("running");

console.log(todoList.indexOf("cleaning"));

// slice und concard
// slice schneidet Elemente aus einem Array aus. Dabei wird der Startindex und eventuell 
// Endindex als zweiter Parameter übergeben. Wobei der Endindex nicht mit eingeschlossen ist,
// Startindex schon. Wird kein Endindex übergeben, so schneidet slice alles angefangen 
// vom Startindex aus.

// concat funktioniert ähnlich wie der + Operator bei Strings. Es dient dazu Arrays zu einem neuen
// Array zusammenzufügen

function remove(array, index) {
    return array.slice(0, index)
    .concat(array.slice(index+1));
}

console.log(remove(["a", "b", "c", "d", "e"], 2));

// Eigenschaften von Strings

console.log("coconuts".slice(4,7));
console.log("coconut".indexOf("u"));
console.log("one two three".indexOf("ee"));

console.log("okay \n".trim());
console.log(String(6).padStart(3,"0"));

console.log(2/0);