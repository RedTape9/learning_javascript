/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/


// Код возьмите из предыдущего домашнего задания

'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) || numberOfFilms < 0) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

/*
for (let i = 1; i <= 2; i++) {
    const a = prompt('Einer der Letzten Filme die du geguckt hast?','');
    if (a == null || a == '' || a.length > 50) {
        console.log('error');
        i--;
        continue;
    }
    const b = prompt('Bewerte ihn von 1 - 10',''', '');
    if (b == null || b == '' || b.length > 10) {
        console.log('error');
        i--;
        continue;
    }
    personalMovieDB.movies[a] = b;
}
*/

function remeberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Einer der Letzten Filme die du geguckt hast?', ''),
            b = prompt('Bewerte ihn von 1 - 10', '');
        if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 10) {
            personalMovieDB.movies[a] = b;
        } else {
            console.log('error');
            i--;
        }
    }
}

remeberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

function writeYourGenres() {
    for(let j = 1; j <= 3; j++) {
        personalMovieDB.genres[j -1] = prompt(`Ваш любимый жанр под номером ${j}`,``);
    }
}

writeYourGenres();

function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    }
    
}
showMyDB(personalMovieDB.privat);

