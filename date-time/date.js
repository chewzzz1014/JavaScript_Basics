"use strict"
//creation of Date

let now = new Date();
alert(now)    //Wed Mar 23 2022 22:58:36 GMT+0800 (Malaysia Time)
//display time when i was writing the code!

let start = new Date(0);    //0 milliseconds from 1970, January 01
alert(start);   //Thu Jan 01 1970 07:30:00 GMT+0730 (Malaysia Time)

let dateString = new Date ("2022-03-02");   // YYYY/MM/DD
alert(dateString);

let date = new Date (2022, 02, 23, 23, 11);
alert(date);    // 2022, 23 March 23:11 (seconds and milliseconds are default values, 0)


//////////////////////////////////////////////////////////////////////

//accessing components of Date in local time zone

alert(`Year: ${date.getFullYear()}`);   //2022
alert(`Month: ${date.getMonth()}`);    //2
alert(`Date: ${date.getDate()}`);    //23
alert(`Hour: ${date.getHours()}`);   //23
alert(`Minute: ${date.getMinutes()}`);   //11
alert(`Seconds: ${date.getSeconds()}`);    //0
alert(`Milliseconds: ${date.getMilliseconds()}`);    //0
alert(`Day in week: ${date.getDay()}`);    //3 (Wednesday)


// accessing components of Date in UTC time format
alert(`Year in UTC: ${date.getUTCFullYear()}`);
alert(`Month in UTC: ${date.getUTCMonth()}`);
alert(`Date in UTC: ${date.getUTCDate()}`);
alert(`Timestamp of date: ${date.getTime()}`);    //milliseconds from 1970 January 1

// differences between local time zone and UTC
alert(`Difference in time zone: ${date.getTimezoneOffset()}`);


//updating components of Date

date.setFullYear(2002);
date.setMonth(9);
date.setDate(14);
date.setHours(12);
date.setMinutes(24);
date.setSeconds(45);

alert(date);


// when convert date to number, it will become timestamp in milliseconds of that date

alert(+date);
alert( +date === date.getTime() );    //true

// keep track of time taken by a program to execute

let start = new Date()

let multiply = []
for (let i=1; i<=12; i++){
  for (let j=1; j<=12; j++)
    multiply.push(i*j);
}

let end = new Date()

alert(`This process took ${(end-start)/1000} seconds!`);
