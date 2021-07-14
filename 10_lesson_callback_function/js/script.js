"use strict";

function first() {
    // Do Something
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`I learn: ${lang}`);
    callback();
}

function done() {
    console.log('I finished this lesson');
}

learnJS('Javascript', done); // Funktion done wird hier an callback übergeben und NICHT aufgerufen,
                             // daher auch keine '()' Klammern dahinter.