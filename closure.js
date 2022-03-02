//closure of function in JS


//we can only access inner() through outer(). inner() forms closure that consist of x,y and result

function outer(y){

  var x = 5;
  var result = [];

  return function inner(){ result.push(y,++x); console.log(result); } ;
}

var test = outer(9);

test(); //[9,6]
test(); //[9,6,9,7]
test(); //[9,6,9,7,9,8]

var test1 = outer(1);
test1(2); //[1,6]
test1(3); //[1,6,1,7]
test1(4); //[1,6,1,7,1,8]



//make some changes...
function outer(y){

  var x = 5;
  var result = [];

  return function inner(y){ result.push(y,++x); console.log(result); } ;

}

var test1 = outer(1);
test1(2); //[2,6]
test1(3); //[2,6,3,7]
test1(4); //[2,6,3,7,4,8]
