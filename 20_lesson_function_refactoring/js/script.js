'use strict';

// Closures
// 1)
function wrapValue(n) {
    let local = n;
    return() => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
console.log(wrap2());

// 2)
function multiplier(factor) {
    return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));

// Rekursion
// 1)
function power(base, exponent) {
    if (exponent == 0) {
        return 1;
    }
    else {
        return base * power(base, exponent - 1);
    }
}
console.log(power(2, 3));

// 2)
function findSolution(target) { 
    function find(current, history) {
        if (current == target) {
            return history;
        } else if(current > target) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) ||
                   find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, "1");
}
console.log(findSolution(24));

