"use strict";

let s = "Hello, world"; // Definiert einen Text.


// Teile eines Strings erhalten:


s.substring(1, 4) // => "ell": Das 2., 3. und 4. Zeichen.


s.slice(1, 4) // => "ell": Das Gleiche.


s.slice(-3) // => "rld": Die letzten drei Zeichen.


s.split(", ") // => "[Hello", "world"]: Auftrennung anhand des


// angegebenen Trennstrings.


// Durchsuchen eines Strings:


s.indexOf("l") // => 2: Position des ersten Vorkommens des


// Buchstabens "l".


s.indexOf("l", 3) // => 3: Position des ersten "l" auf oder nach Indexposition 3.


s.indexOf("zz") // => -1: s enthält nicht die Teilzeichenfolge "zz".


s.lastIndexOf("l") // => 10: Position des letzten Vorkommens des


// Buchstabens "l".


// Boolesche Suchfunktionen in ES6 und höher:


s.startsWith("Hell") // => true: Der String beginnt mit diesen Zeichen.


s.endsWith("!") // => false: s endet nicht mit einem "!".P


s.includes("or")        // => true: s enthält die Teilzeichenfolge "or".
let email = "whoknows@gmail.com"; // Verwendungsbeispiel
console.log(email.includes("@"));
console.log(email.includes("\u0040"));
// Modifizierte Versionen eines Strings erzeugen:


s.replace("llo", "ya")  // => "Heya, world"


s.toLowerCase()         // => "hello, world"


s.toUpperCase()         // => "HELLO, WORLD"


s.normalize()           // Unicode-NFC-Normalisierung: ES6.


s.normalize("NFD")      // NFD-Normalisierung. Auch "NFKC", "NFKD".


// Überprüfung einzelner (16-Bit-)Zeichen eines Strings:


s.charAt(0)             // => "H": Das erste Zeichen.


s.charAt(s.length-1)    // => "d": Das letzte Zeichen.


s.charCodeAt(0)         // => 72: 16-Bit-Zahl an der angegebenen Position.


s.codePointAt(0)        // => 72: ES6, funktioniert mit Codepoints > 16 Bit.


// Funktionen zur Auffüllung von Strings in ES2017:


"x".padStart(3)         // => "x": String auf eine Länge von 3 durch links


// hinzugefügte Leerzeichen erweitern.


"x".padEnd(3)           // => "x ": String auf eine Länge von 3 durch rechts


// hinzugefügte Leerzeichen erweitern.


"x".padStart(3, "*")    // => "**x": String auf eine Länge von 3 durch links


// hinzugefügte Sternchen erweitern.


"x".padEnd(3, "-")      // => "x--": String auf eine Länge von 3 durch rechts


// hinzugefügte Bindestriche erweitern.


// Funktionen zur Beschneidung von Leerzeichen. trim() ist ES5, andere Funktionen


// sind ES2019:

" test ".trim()         // => "test": Leerzeichen am Anfang und am Ende entfernen.


" test ".trimStart()    // => "test ": Leerzeichen links entfernen. Auch trimLeft.

" test ".trimEnd()      // => " test": Leerzeichen rechts entfernen. Auch trimRight.


// Verschiedene String-Methoden:


s.concat("!")           // => "Hello, world!": Oder benutzen Sie stattdessen


// einfach den +-Operator.


"<>".repeat(5)          // => "<><><><><>": n Kopien verketten. ES6.

// Strings sind "schreibgeschütz" sprich unveränderbar. Können auch wie schreibgeschützte Arrays behandelt werden
// und können mit eckigen Klammern [] anstelle von charAt()- Methode angesprochen werden

let z = "hello, world";

z.charAt(0)           // => "h"
z[0]                  // => "h"

z[z.length-1]         // => "d"



let name = "Bill";


let greeting = `Hello ${name}.`; // greeting == "Hello Bill."

// `` = Backticks wurden für String-Literale in ES6 eingeführt und können im Vergleich zu "" und ''
// JavaScript-Ausdrücke in sich beinhalten.
// Alles zwischen ${ und } wird als JavaScript-Ausdruck interpretiert. 


`\n`.length            // => 1: Der String enthält ein einzelnes Newline-Zeichen.


String.raw`\n`.length  // => 2: Ein Backslash und der Buchstabe n. 
// raw gibt den String aus und ignoriert dabei die \ Maskierungen
//Obwohl das Tag eines getaggten Template-Literals eine Funktion ist, 
//werden bei ihrem Aufruf keine Klammern verwendet. 
// In diesem sehr speziellen Fall ersetzen die Backticks die öffnende und die schließende Klammer.




