//object Circle
// was learning Java oop and thus tried to convert the example code in Java into JavaScript

function Rectangle( length=1, width=1 ){
  this.length = length;
  this.width = width;

  this.getPerimeter = ()=> (2*length+2*width);
  this.getArea = () => (length*width);
  this.printPerimeter = () => ( alert(`Perimeter is ${this.getPerimeter()}cm.` ) );
  this.printArea = () => ( alert(`Area is ${r1.getArea()}cm^2.` ) );
}

let r1 = new Rectangle();
r1.printPerimeter();
r1.printArea();

let r2 = new Rectangle(2);
r2.printPerimeter();
r2.printArea();
