'use strict';

const book = {
    title: 'MyBook',
    price: 44.90,
    author: 'Philip Ackermann',
    isbn: '858-40439393233',
    printDiscription() {
        console.log(`${this.author}: ${this.title}`);
    }
}
console.log(book.title);