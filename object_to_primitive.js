// convert object to primitive type (number/String)

/*
Conversion Rule
1. No conversion to boolean. All objects are true in a boolean context.
2. Numeric conversion happens when substract object/apply mathematical functions (eg,date object)
3. String conversion: when output an object with alert(obj) and in similar context.
*/


/* syntax: obj[Symbol.toPrimitive] = function (hint)
 * {      if (hint=="String")
 *              //do something
 *        else
 *             // hint is number. Do something
 * }
 */


// person is an object
 let person = {
   name: "chewzzz",   //string
   age: 20,   //number

   // convert object "person" to string or numeric
   [Symbol.toPrimitive](hint){
     return (hint=="string")? this.name: this.age;
   },   //hanging comma
 };


 alert(person);   //String
 alert(+person);    //number
 alert(person+1);   //default
 alert(person+" !");    //default


// if Symbol.Primitive not exist, JS use toString() and valuesOf()

let person = {
  name: "chewzzz",
  age: 20,

  toString(){     //hint is "string"
    return this.name;
  },

  valueOf(){      //hint is "number" or "default"
    return this.age;
  },
};

alert(person);   //String
alert(+person);    //number
alert(person+1);   //default
alert(person+" !");    //default
