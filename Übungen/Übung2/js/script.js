'use strict';

const fizz = "Fizz",
    buzz = "Buzz";

for(let count = 1; count <= 100; count++) {
    if (count % 3 == 0 && count % 5 == 0) {
        console.log(fizz, buzz);
    }
    else if(count % 3 == 0) {
        console.log(fizz);
    }
    else if (count % 5 == 0) {
        console.log(buzz);
    }
    else {
        console.log(count);
    }
}

// Musterlösung
for (let n = 1; n <= 100; n++) {
    let str = "";
    if (n % 3 == 0) str += "Fizz";
    if (n % 5 == 0) str += "Buzz";
    console.log(str || n);
}

