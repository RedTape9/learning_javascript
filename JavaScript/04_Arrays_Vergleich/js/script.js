"use strict";

function equalArrays(a, b) {
    if (a === b) return true;
    if (a.length !== b.length) return false;

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

let a1 = [1,2,3], a2 = [1,2,3];

console.log(equalArrays(a1, a2));
