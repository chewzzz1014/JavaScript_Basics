"use strict"

// we can assign a method to the class a a whole
class Person{
  static staticMethod(){
    alert(this === Person);
  }
}
/*    equivalent to :
    class Person(){}
    Person.staticMethod(){ ... }
*/

Person.staticMethod();    // true

// static methods belonged to the class only and not used by the class's object
class Book{
  constructor(title, date){
    this.title = title;
    this.date = date;
  }

  // static method
  static compare(bookA, bookB){
    return bookA.date - bookB.date;
  }
}

let books = [ new Book("Wonder", new Date(2012, 5, 12)),
              new Book("Dream", new Date(2018, 8, 30)),
              new Book("Burn", new Date(2002,7,16))];
// sort will use static method "compare". Called using className.methodName since
//it belonged to the class and not to any instance of class (object)
books.sort(Book.compare);

alert(`Earliest book: ${books[0].title}`);    // Burn

// another examples of using static method:
class Book{
  constructor(title, date){
    this.title = title;
    this.date = date;
  }

  static today(){
    return new this("Alone", new Date());
  }
}

//  an instance of Book with today's Date
let myBookToday = Book.today();
alert(myBookToday.title);   // Alone


// static properties
// class Person { static isHuman = true; }

// static properties and methods are inherited
/*
 Rabbit.getPropertyName() -> Object.getPropertyName()
*/
