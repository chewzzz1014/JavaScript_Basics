// implementing recursive function

// example: calculating exponential power, x^n in this case
//iterative implementation
function pow(x, n){
  let result = 1;
  for (let i=1; i<=n; i++)
    result *= x;
  return result;
}

alert(`2^3 is ${pow(2,3)}`);

// recursive implementation
function pow(x, n){
  if (n==1)
    return x;
  else
    return x * pow(x, n-1);

  // or
  // (n==1)? return x: return pow(x, n-1);
}

alert(`2^3 is ${pow(2,3)}`);


// using recursive for accessing unknown number of nested object

let company = {
  sales: [{name:"Henry", salary:1000}, {name: "Alice", salary: 1200}],
   // ^first property: an array that contains objects^

  development: {
    sites: [{name: "Peter", salary: 1800}, {name: "John", salary: 1450}],
    internals: [{name: "Qin", salary: 2300}],   //hanging comma
  },    //hanging comma
  // ^second property, which is an object -> nested object -> array -> objects as elements of array^
};

// base case: it's an array and thus sum up the salaries in the array
// else, it's an object. Recursive continues till reaches base case

function sumSalaries(department){

  // base case. If it's array, find the sum of salaries in that array
  if (Array.isArray(department))
    return department.reduce( (accumulator, item)=> accumulator + item.salary, 0);

  // if haven't reach base case
  else{
    let sum = 0;
    for (let subdep of Object.values(department))
      sum += sumSalaries(subdep);
    return sum;
  }
}

alert(`Total Salaries is \$${sumSalaries(company)}.`);


// demonstrate linked list with Recursive
let linkedList = {
  value: 1,
  next: {
    value: 2,
    next:{
      value: 3,
      next:{
        value: 4,
        next:null
      }
    }
  }
};

/* //linkedList's iterator. Contains bug :(
      linkedList[Symbol.iterator] = function(){
        return{
          start: this.value,
          end: this.next.next.next.value,
          next(){
            if (this.start<this.end)
              return {done: false, value: this.start.next.value};
            else
              return {done: true};
          }
        };
      };

      for (let item of linkedList)
        alert(item);
*/


// split LinkedList into multiple parts
let secondList = linkedList.next.next;    // 3 and 4
linkedList.next.next = null;

// join again
linkedList.next.next = secondList

// prepend new value to the front of linkedList
linkedList = { value:"first", next: linkedList};

// remove value from the middle
list.next = list.next.next;
