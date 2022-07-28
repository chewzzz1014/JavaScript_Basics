"use strict"

const now = new Date();
const birthDate = new Date(2002, 10, 14);
const demoDate = new Date();

demoDate.setMonth(0);

console.log(now);
console.log(birthDate);
console.log(demoDate);

console.log(`Date of week: ${demoDate.getDay()}`);
console.log(`Date: ${demoDate.getDate()}`);
