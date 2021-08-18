'use strict';
// 1) Minimum

function minimum(a, b) {
  if(a > b) {
    return b;
  }
  else if(a < b){
    return a;
  }
  else {
    const str = 'beide Elemente haben den gleichen Wert';
    return str;
  }
}

console.log(minimum(5,5));


// 2) Rekursion

function isEven(n) {
  if(n == 0) return true;
  else if (n == 1) return false;
  else if (n < 0) return isEven(-n);
  else return isEven(n - 2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(4));

// 3) Bohnen zählen

function countB(myStr) {
  return countChar(myStr, "B");
}

function countChar(str, ch){
  let count = 0;
  for(let i = 0; i <= str.length-1; i++) {
    if(str[i] == ch) count++;
  }
  return count;
}

console.log(countB("BBC"));
console.log(countChar("kakkerlak","k"));