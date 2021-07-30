console.log("\u{1F600}");

let x = 0;
;[x,x+1,x+2].forEach(console.log)

let v = 5**3;
console.log(v);

console.log(Math.random());

console.log(Number.MAX_VALUE);

console.log(Number.isFinite(Math.PI));

let z = NaN;
console.log(isFinite(z));

// Rundungsfehler
let l = .3 - .2;    // Bsp. 30Cent minus 20Cent
let k = .2 - .1;

console.log(l === k); // false
console.log(l === .1); // false
console.log(k === .1); // true
console.log(l); // 0.09999999999999998

// Bigint (eingeführt 2020 für 64Bit Ganzzahlen)

console.log(0x8000000000000000n);

// auch als Funktion zur Konvertierung von Zahlen und auch Strings

console.log(BigInt(Number.MAX_SAFE_INTEGER));
let string = "1" + "0".repeat(100);
console.log(BigInt(string));
 // Bei Division mit BigInt wird der Rest abgeschnitten und abgerundet
console.log(3000n / 997n); // 3n

console.log(Date.now());  // Die aktuelle Zeit als Zeitstempel.
let now = new Date();
console.log(now);


let str = "";
console.log(str.length);
console.log("\ud83d\udc99");

// Strings
console.log(`"Sie hat 'hi' gesagt", sagte er.`);

console.log("one \
long \
line");

console.log("first line \nsecond line"); // \n Zeilenwechsel im String
console.log('Würden Sie das Buch von O\'Reilly nicht vorziehen?'); // maskierung von ' mit \ davor,
// sofern einfach Anführungszeichen verwendet wurden.

console.log("\u{1f600}"); // mehr als vier Hex-Ziffern nach dem u werden in geschweifte Klammern gesetzt.
console.log("\u03c0");