'use strict';

let hashtag = "#";

for(let i = 0; i < 7; i++) {
    console.log(hashtag);
    hashtag = hashtag + "#";
}
console.log();

let hashtag2 = "#"
let counter = 0;
do {
    console.log(hashtag2);
    hashtag2 = hashtag2 + "#";
    counter++;
} while (counter < 7);

console.log();

let hashtag3 = "#";
while (hashtag3.length <=7) {
    console.log(hashtag3);
    hashtag3 = hashtag3 + "#";
}

// Musterlösung

for (let line = "#"; line.length <=7; line += "#") {
    console.log(line);
}