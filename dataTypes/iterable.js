//use of iterable in iterating over object.
//iterable will be used in for...of loop

let range = { start:1, end: 5} ; //an object

range[Symbol.iterator] = function(){        //iterable function that make an object iterable
    return {
    current: this.start,
    last: this.end,
      next(){         //call next() in each iteration in for..of loop. Compulsory in iterable object
          if (this.current <= this.last)    //haven't reach the end of loop
            { return {done:false, value:this.current++}; }   //syntax of return value for next(). done indicated whether the iteration has finished
          else
            { return {done:true} } //it's the last iteration and we are done
      }
    };
};

for (let num of range){   //we are able to loop through and access elements in "range" even though "range" is an object
  alert (num);    //print number in range that been set in "range"
}


//string is itetrable
let name = "chew";
for (let char of name)
  alert(char);    //print each character in strings

//or call string's iterator explicitly

let iterator = name[Symbol.iterator](); //iterator has next()
while(true){
  let result = iterator.next();   //"result" will hold next() of iterator
  if (result.done)    //"done" can be accessed from next()
    break;
  alert(result.value); //"value" can be accessed from next()
}


//Array.from can have second argument (it's optional) that's a function which applied to each element of Array


let chars = Array.from(name, char=>char+"!");
alert(chars[0]); //c!
alert(chars[1]); //h!
alert(chars[2]); //e!
alert(chars[3]); //w!
alert(chars.length);
alert(chars.slice(1:3)) //h!e!
