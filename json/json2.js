"use strict"
/*
- JSON = JavaScript Object Notation
- language dependant and user-readable
- depends on 2 data structures that are found in all modern prog langs:
    1. Collection of name-value pairs (comparable to object). JS object properties "stringified"
    2. Ordered list of values (comparable to arrays). Pack collections of objects into single file
*/

// Object format
const book = {
  title: "1984",
  author: "George Orwell",
  isAvailable: true
};

// converted to JSON
const bookJSON = JSON.stringify(book);
console.log(bookJSON);  // {"title":"1984","author":"George Orwell","isAvailable":true}


/*
- data in name-value pairs that are separated by commas
- {} enclose single object
- [] enclose multi-item arrays
*/

// single object
{
  "title": "1984",
  "author": "George Orwell",
  "isAvailable": true
}

// multi-item arrays
[
  { "title": "1984", "author": "George Orwell","isAvailable": true },
  { "title": "1984", "author": "George Orwell","isAvailable": true },
  { "title": "1984", "author": "George Orwell","isAvailable": true },
]


/*
 JSON.stringify
 - Serialize :
    1. JS object into equivalent text string
    2. collection of JS objects into an ordered list
*/

// serialize JS object
var json = JSON.stringify(book);
console.log(json);  // {"title":"1984","author":"George Orwell","isAvailable":true}

// serialize collection of json object
var copies = [book, book];
var jsonMore = JSON.stringify(copies);
console.log(jsonMore);  // [{"title":"1984","author":"George Orwell","isAvailable":true},{"title":"1984","author":"George Orwell","isAvailable":true}]





/*
  JSON.parse()
  - Deserialize:
     1. JSON-formatted text string into JS object
     2. JSON-formatted text string into JS array
*/

// Deserialize into JS object
var jsonObj = '{"title":"1984","author":"George Orwell","isAvailable":true}';
var parsedBook = JSON.parse(jsonObj);
console.log(parsedBook.title);  // 1984
console.log(parsedBook.isAvailable); // true

// Deserialize into JS array
var jsonArray = '[{"title":"1984","author":"George Orwell","isAvailable":true},{"title":"Burning","author":"Unknown","isAvailable":false}]';
var books = JSON.parse(jsonArray);
console.log(books[0].title);  // 1984
console.log(books[1].title); // Burning
