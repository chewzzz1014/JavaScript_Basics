//"unpack" elements of array and object


//array destructuring

let arr = ["Hello","Words"];
let [first, second ] = arr;
alert(first);   //Hello
alert(second);    //Worlds


//"students" is an arrat that stores languages known by a student
let state = "I knew Mandarin, Malay and English!";
let students = state.split(" ");
students = students.filter( (item,index)=> {
          if ( item[0]===item[0].toUpperCase() && index>0) return item} );

students[0] = students[0].slice(0, students[0].length-1);
let last = students.length-1
students[last] = students[last].slice(0, students[last].length-1);

//where the desctructuring assignment goes
let [first, second, third] = students
alert(`The language I'm most familiar with is ${first}.`)

let[,nationalLang, globalLang] = students;    //ignore first element of array when desctructuring
alert(`${nationalLang} is the national language of Malaysia.`)
alert(`We need ${globalLang} to communicate.`)

//or we can even use desctructuring assignment to make element of array as prperties of object
let myLang_pro = {
  name: "chew",
}

let [myLang_pro.motherTongue, myLang_pro.nationalLang, myLang_pro.internationalLang] = students

alert(Object.values(myLang_pro))


////////////////////////////////////////////////////////////////

//if size of array>number of variables available, omit or falls into another array (if given the syntax ...rest)
let participants = ["dog","cat","wolf","rabbit","rooster"];
let [first, second, third, ...rest] = participants

alert(`First place goes to ... ${first}!`);
alert(`Second place goes to ... ${second}!`);
alert(`Third place goes to ... ${third}!`);
alert(`Consolation prizes belong to ${rest}. Try it hard next year!`);

//set default values
let [first="No one", second="No one", third="No one"] = [, 'Nick',];
alert(`${first} receives the first prize.`);
alert(`${second} receives the second prize.`);
alert(`${third} receives the third prize.`);

// input-prompted values
let [first=prompt("1st"), second=prompt("2nd"), third=prompt("3rd")] = [, 'Nick',];
alert(`${first} receives the first prize.`);
alert(`${second} receives the second prize.`);    //Nick
alert(`${third} receives the third prize.`);



///destructuring for Object
let car = {
  engine: "V34Z",
  model: "Proton",
  carPlate: "WER1234"
};

let {engine, model, carPlate} = car;    //will be assigned based on name
/*
or

let {engine, model, carPlate} = {carPlate: "WER1234", engine: "V34Z", model:"Proton"};

this will works as well since the assignment is based on name of properties
*/


//for assignement not following the name
// let { sourceProperty: targetVariable } = obj;
let {engine:carPlate, model:engine, carPlate: model} = car;
alert(engine);    //"Proton"
alert(model);   //"WER1234"
alert(carPlate);    //"V34Z"

//nested destructuring

let person = {
  name : "Nick",
  gpa: [3.50, 3.56, 3.76],
  studies:{
    major: "Finance",
    minor: "Music",
    yearEnrolled: 2019,
  },
}

let{
  name = "None", //default value. only use default when "name" is not in person
  age =  22,  //take this  since age not in person
  gpa: [sem1, sem2, sem3],
  studies: { M, m, yr}
} = person;

alert(name);    //Nick
alert(age);   //22
alert(sem2);    //3.56
alert(M);   //Finance
alert(yr);    //2019


/////////////////////////

let user = { name: "John", years: 30 };

let {name, years:age, isAdmin=false} = user;

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false



//////////////////////////////

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salaries){
  let maxSalary = 0;
  let maxStaff = null;

  for (let [name, salary] of Object.entries(salaries)){
      if(salary>maxSalary)
      {
        maxSalary = salary;
        maxStaff = name;
      }
  }

  return maxStaff;
}

topSalary(salaries);
