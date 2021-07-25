"use strict";

// Automatische Typumwandlung
// bei || wird 0, NaN und leere String("") als false aufgefasst und somit der folgende "Ersatzwert"
// geliefert

console.log(0 || "user"); // 0 wird in boolisches false gewandelt, daher als Ausgabe: user

console.log(0 && "user"); // 0 wird in boolisches false gewandelt, doch bei && wird alles was false ist 
// ausgegeben

// der && Operator verhält sich andersrum, wenn der linke Wert hier in false umgawandelt wird, wird 
// dieser auch ausgegeben. Bei true, der Ersatzwert (rechts)

// Wichtig: bei den beiden Operatoren wird der rechte Teil nur dann ausgewertet, wenn es notwendig ist.
// so wird bei true || X als auch bei false && X der Ersatzwert X ignoriert, da die erste Bedingung stimmt.
// das wird als KURZGESCHLOSSENE AUSWERTUNG bezeichnet.
