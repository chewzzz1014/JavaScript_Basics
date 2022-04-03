"use strict"
//using Date.getTime() is faster than convert Date to number

function useGetTime(d1, d2){
  return d2.getTime() - d1.getTime();
}

function dateToNumber(d1, d2){
  return d2-d1;
}

// benchmarking
function bench(f){
  let d2 = new Date();
  let d1 = new Date(0);

  let start = Date.now();
  for (let i=0; i<10000; i++)
    f(d1,d2);

  return Date.now() - start;
}

//function as value of argument of bench
alert(`Time taken for Date.getTime(): ${bench(useGetTime)}ms`);   //4ms
alert(`Time taken for substraction of Date object: ${bench(dateToNumber)}ms`);    //9ms


//Date.parse()
let date = new Date (Date.parse("2022-04-03T15:23:45.417Z"));
alert(date);

// create a Date object at 20 Feb 2012, 3:12am at local time zone
let date1 = new Date(2012, 01, 20, 3, 12);
alert(date1);

// convert week day returned to literal
function getWeekDay(date){
  dayLiteral = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
  return dayLiteral[date.getDay()];
}

let date2 = new Date(2022, 3, 3);  // 3 April 2022
alert( getWeekDay(date) );

// European weekday (Mon=1, Tue=2, ...., Sun=7)
function getLocalDay(date){
  if (date.getDay()===0)
    return 7;
  else
    return date.getDay();
}

alert(getLocalDay(date2));

//find day of that n days ago from the given date1let date = new Date(2015, 0, 2);
function getDateAgo(date, n){

  let nDaysAgo = new Date(date);
  nDaysAgo.setDate(date.getDate() - n);
  return nDaysAgo.getDay();
}

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)


// find the last day of Month (30/31/28/29)
function getLastDayOfMonth(year, month){
    let date3 = new Date(year, month+1, 0);
    return date3.getDate();
}
alert(getLastDayOfMonth(2012, 1)); //29


// number of seconds have passed today (from 0.00am to current time)
function getSecondsToday(){
  let curr = new Date ();   // now
  let today = new Date(curr.getFullYear(), curr.getMonth(), curr.getDate());    //today's beginning of day (since time is 0 by default so that's no need to provide those 3 arguments)

  return Math.round((curr-today)/1000);   //substrction of 2 date object result in milliseconds. Convert it to seconds then round it.
}

alert(getSecondsToday());


// get number of seconds till tomorrow
function getSecondsToTomorrow(){
  let curr = new Date();
  let tmr = new Date(curr.getFullYear(), curr.getMonth(), curr.getDate()+1);

  return Math.round((tmr-curr)/1000);
}

alert(getSecondsToTomorrow());


// format the relative date
function formatDate(date){
  let now = new Date();
  let passed = now-date;    // time differences in milliseconds. Not going to convert to seconds here to avoid loss of precision

  if (passed<1000)    // less than 1 seconds or 1000 milliseconds
    return "right now";
  else if ( (passed/1000) <60)   // less than 1 minute === 60 seconds
    return `${Math.round(passed/1000)} sec. ago`;
  else if ( (passed/1000)< 3600)
    return `${Math.floor(passed/1000)/60} min. ago`;
  else {
    let out = [date.getDate(), date.getMonth(), (date.getYear()%100), date.getHours(), date.getMinutes()].map( (item)=> (item<10)?  "0"+item : item );
    return out.slice(0,3).join(".")+" "+out.slice(3).join(":");
  }
}

alert( formatDate(new Date(new Date - 1)) ); // "right now"
alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"
alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"
alert( formatDate(new Date(new Date - 86400 * 1000)) );
