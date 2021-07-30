"use strict";

class Point { // Gemäß Konvention werden Klassennamen groß geschrieben.
    constructor(x,y) { // Konstruktorfunktion zur initialisierung neuer Instanzen.
        this.x = x; // Das Schlüsselwort "this" bezeichnet das neue Objekt, das initialisiert wird.
        this.y = y; // Funktionsargumente als Objekteigenschaften speichern.

        // In Konstruktorfunktionen ist keine Rückgabe erforderlich.

    }

    distance() { // Methode zur Berechnung der Entfernung zwischen Ursprung und Punkt.
        return Math.sqrt( // Liefert die Quardratwurzel aus x² + y²
            this.x * this.x + this.y * this.y
            // "this" bezieht sich auf das Punktobjekt, auf dem die Methode distance()
            // aufgerufen wird.
            );
    }

}

// Verwenden Sie die Konstruktorfunktion Point() mit "new", um Punktobjekte zu erstellen.

let p = new Point(1, 1); // Der geometrische Punkt (1, 1).

// Verwenden Sie jetzt eine Methode des Punktobjekts p.

console.log(p.distance()); // => Math.sqrt



