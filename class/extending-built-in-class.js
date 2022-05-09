"use strict"

// declare extended Array class with add-on methods
class ExtendedArray extends Array{
  isEmpty(){
    return this.length === 0;
  }
}

let arr = new ExtendedArray(2, 4, 6, 8, 10);
alert(arr.isEmpty());   // false

// object of ExtendedArray can use built-in methods of Array too
// and will return the object of ExtendedArray
let filteredArr = arr.filter(item => item=> 2);
// arr.filter(...) return object of ExtendedArray. filteredArr is also an object of ExtendedArray
alert(filteredArr);   // 2, 4,6, 8, 10
alert(filteredArr.isEmpty());   // false
