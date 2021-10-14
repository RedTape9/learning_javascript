'use strict';

/* function showPrimes(n) {
    nextPrime: for (let i = 2; i < n; i++) {
  
      for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
      }
  
      console.log( i ); // простое
    }
  } */

  function showPrimes(n) {

    for (let i = 2; i < n; i++) {
      if (!isPrime(i)) continue;
  
      console.log(i);  // простое
    }
  }
  
  function isPrime(n) {
    for (let j = 2; j < n; j++) {
      if ( n % i == 0) return false;
    }
    return true;
  }

showPrimes(10);