// Q131: Display current data
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;
document.write(today);

// Q132: compare 2 data object
var d1 = new Date();
var d2 = new Date(d1);
console.log(d1.getTime() === d2.getTime()); //True
console.log(d1 === d2); // False

// Q133: check if a string starts with another string
"Good morning".startsWith("Good"); // true
"Good morning".startsWith("morning"); // false

// Q134: trim string
" Hello World ".trim(); //Hello World
// if trim() is not supported
if (!String.prototype.trim) {
    (function () {
        // Make sure we trim BOM and NBSP
        var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        String.prototype.trim = function () {
            return this.replace(rtrim, '');
        };
    })();
}


// Q135: add key value pair
var object = {
    key1: value1,
    key2: value2
};
// dot notation
object.key3 = "value3";
// []
object["key3"] = "value3";


// Q136: !--
// combination of:
// logical NOT, !
// prefix decrement


// Q137: variable default value
var a = b || c; // assign c to b if b is falsy


// Q138: multiline string
var str = "This is a \
very lengthy \
sentence!";

// Q139: app shell model
/* An application shell (or app shell) architecture is one way to build a Progressive Web App that
reliably and instantly loads on your users' screens, similar to what you see in native applications.
It is useful for getting some initial HTML to the screen fast without a network.
*/
