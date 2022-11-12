// Functional programming is a style of programming where solutions are simple, isolated functions, without any side effects outside of the function scope: INPUT -> PROCESS -> OUTPUT
// 1. isolated function:  there is no dependence on the state of the program, which includes global variables that are subject to change

// 2. Pure functions - the same input always gives the same output

// 3. Functions with limited side effects - any changes, or mutations, to the state of the program outside the function are carefully controlled


// isolated function
const prepareTea = () => 'greenTea';

// pure function
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Functions with limited side effects
const tea4TeamFCC = getTea(40);
// Only change code above this line
