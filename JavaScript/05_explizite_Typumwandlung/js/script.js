"use strict";

let n = 17;
let binary = "0b" + n.toString(2);
let octal = "0o" + n.toString(8);
let hex = "0x" + n.toString(16);

console.log(Number(hex));  // Number() funktioniert nur bei ganzen Zahlen zur Basis 10 und erlaubt nach dem Zahlliteral
                           // keine weiteren Zeichen, die nicht Teil des Literals sind.
console.log(parseInt(hex)); // parseInt() und parseFloat() sind da flexibler (siehe Beispiele unten)

let n = 123456.789;

n.toFixed(0)         // => "123457"
n.toFixed(2)         // => "123456,79"
n.toFixed(5)         // => "123456,78900"
n.toExponential(1)   // => "1.2e+5"
n.toExponential(3)   // => "1.235e+5"
n.toPrecision(4)     // => "1.235e+5"
n.toPrecision(7)     // => "123456.8"
n.toPrecision(10)    // => "123456.7890"



parseInt("3 blind mice")     // => 3
parseFloat(" 3.14 meters")   // => 3.14
parseInt("-12.34")           // => -12
parseInt("0xFF")             // => 255
parseInt("0xff")             // => 255
parseInt("-0XFF")            // => -255
parseFloat(".1")             // => 0.1
parseInt("0.1")              // => 0
parseInt(".1")               // => NaN: Ganze Zahlen dürfen nicht mit einem "." beginnen.
parseFloat("$72.47")         // => NaN: Zahlen dürfen nicht mit "$" beginnen.

// parseInt() akzeptiert ein optionales zweites Argument, über das die Basis der zu parsenden Zahl angegeben werden kann. 
// Für dieses Argument sind Werte zwischen 2 und 36 erlaubt, zum Beispiel:

parseInt("11", 2)     // => 3: (1*2 + 1)
parseInt("ff", 16)    // => 255: (15*16 + 15)
parseInt("zz", 36)    // => 1295: (35*36 + 35)
parseInt("077", 8)    // => 63: (7*8 + 7)
parseInt("077", 10)   // => 77: (7*10 + 7)




