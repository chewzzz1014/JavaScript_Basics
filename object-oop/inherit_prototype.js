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




/// method override
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// method override
Penguin.prototype.fly = function() { return "Alas, this is a flightless bird."; };

let penguin = new Penguin();
console.log(penguin.fly());
