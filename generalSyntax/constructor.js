//function as constructor of object

function Person (name,age){
  this.name = name;
  this.age = age;
}


//method
Person.prototype.dist = function(){
 console.log(this.name+" is "+this.age+" years old.")
}

var me = new Person ("chew",20)
me.dist()
console.log("me is an instance of Person:",me instanceof Person)
