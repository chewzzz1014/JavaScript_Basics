// map
const fullNames = [
    { first: 'Albus', last: 'Dumbledore' },
    { first: 'Harry', last: 'Potter' },
    { first: 'Hermione', last: 'Granger' },
    { first: 'Ron', last: 'Weasley' },
    { first: 'Rubeus', last: 'Hagrid' },
    { first: 'Minerva', last: 'McGonagall' },
    { first: 'Severus', last: 'Snape' }];

// get first name of all elementz
let first_names = fullNames.map(
    (ele)=>ele.first
);




// filter names with length < 10

names = ['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan'];

filtered_names = names.filter(
    (ele) => ele.length < 10
);



//  every: return true if all elements satisfy the condition or false if therwise
const exams = [80, 90, 75, 99, 87];
exams.every((ele)=>ele>70); // true

// any: return true if any elements satisfy the condition or false if therwise
exams.some((ele)=> ele<50);  // false
