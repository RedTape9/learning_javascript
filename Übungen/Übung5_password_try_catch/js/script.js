'use strict';

function checkPassword(password) {
    if (password.length < 10) {
        throw new Error('Das Passwort muss mindestens 10 Zeichen enthalten.');
    } else if (password.length > 50) {
        throw new Error('Das Passwort darf nicht mehr als 50 Zeichen lang sein');
    }
    return 'Das Passwort erfüllt alle Bedingungen';
}
try {
    const password = "fsfGa8§Fza!-3";
    checkPassword(password);
    const message = 'Das Passwort erfüllt alle Bedingungen.';
    // ... hier weitere Verarbeitung ...
}
catch (error) {
    console.error(error);
}