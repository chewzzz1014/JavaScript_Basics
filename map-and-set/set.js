//Set (of maths) in JavaScript which contains unique value only

function createSetWithValues(){
let mySet = new Set();

mySet.add(1);
mySet.add(3);
mySet.add(5);
mySet.add(11);
mySet.add(7);
mySet.add(9);
mySet.add(9);   //Since 9 already added into the set, this will not count
}

createSetWithValues();
alert(mySet.delete(5));   //return true and delete 5 if 5 existed in the set. return false otherwise

alert(mySet.has(5)); //false

alert(mySet.size);    //4

mySet.clear();    //clear the elements of set. mySet still exists

mySet


createSetWithValues();

//iteration over loop

//1: using for...of
for (let val of mySet)
  alert(val);

//2: using set.forEach
mySet.forEach( (item)=>alert(item) );


for ( let ele of  mySet.entries())    //ele stores [values, value] since Set is singled value object
  alert(`mySet stores value ${ele[0]}.`)
