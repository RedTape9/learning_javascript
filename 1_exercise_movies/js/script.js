"use strict";

const numberOfFilms = prompt('How many films have you seen?')

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Last film you watched?', ''),
      b = prompt('give a mark 1 is the best 6 the worst:', ''),
      c = prompt('Last film you watched?', ''),
      d = prompt('give a mark 1 is the best 6 the worst:', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);