function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// inheritance
Dog.prototype = Object.create(Animal.prototype)

// since dog.constructor will become Animal, convert it to Dog
Dog.prototype.constructor = Dog
Dog.prototype.bark = function(){
  console.log("Woof!")
}

let beagle = new Dog();
beagle.eat();
beagle.bark();
