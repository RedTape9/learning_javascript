'use strict';

console.log(0 || "" || 2 || undefined || true || false);

console.log("Ёжик" > "яблоко");

function multiplier(factor) {
  return number => number * factor;

}

let twice = multiplier(2);
console.log(twice(5));