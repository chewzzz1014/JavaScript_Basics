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

alert(`Year: ${date.getFullYear()}`)    //2022
alert(`Month: ${date.getMonth()}`)    //2
alert(`Date: ${date.getDate()}`)    //23
alert(`Hour: ${date.getHours()}`)   //23
alert(`Minute: ${date.getMinutes()}`)   //11
alert(`Seconds: ${date.getSeconds()}`)    //0
alert(`Milliseconds: ${date.getMilliseconds()}`)    //0
alert(`Day in week: ${date.getDay()}`)    //3 (Wednesday)
