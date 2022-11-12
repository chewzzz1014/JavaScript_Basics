// functional programming principles:
// 1. Don't alter a variable or object - create new variables and objects and return them if need be from a function. Hint: using something like const newArr = arrVar, where arrVar is an array will simply create a reference to the existing variable and not a copy. So changing a value in newArr would change the value in arrVar.

//2. Declare function parameters - any computation inside a function depends only on the arguments passed to the function, and not on any global object or variable.

// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add(bookList, bookName) {
  return [...bookList, bookName]
}


function remove(bookList, bookName) {
  const book_index = bookList.indexOf(bookName);
  if (book_index >= 0) {
        return bookList.filter((ele)=> ele!==bookName)
    }
}
