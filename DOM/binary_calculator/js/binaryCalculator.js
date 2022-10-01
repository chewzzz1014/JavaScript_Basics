const res = document.querySelector("#res");
const btn0 = document.querySelector("#btn0");
const btn1 = document.querySelector("#btn1");
const clr = document.querySelector("#btnClr");
const eql = document.querySelector("#btnEql");
const sum = document.querySelector("#btnSum");
const sub = document.querySelector("#btnSub");
const mul = document.querySelector("#btnMul");
const div = document.querySelector("#btnDiv");

let p = "";

btn0.addEventListener("click", function(e){
    res.innerText += "0";
    p += "0";
})

btn1.addEventListener("click", function(e){
    res.innerText += "1";
    p += "1";
})

sum.addEventListener("click", function(e){
    res.innerText += "+";
    p += "+";
})

sub.addEventListener("click", function(e){
    res.innerText += "-";
    p += "-";
})

mul.addEventListener("click", function(e){
    res.innerText += "*";
    p += "*";
})


div.addEventListener("click", function(e){
    res.innerText += "/";
    p += "/";
})

clr.addEventListener("click", function(e){
   res.innerText = "";
    p="";
})

eql.addEventListener("click", function(e){
    let arr = [], result="none";
    if (p.includes("+")){
        arr = p.split("+");
        result = parseInt(arr[0], 2) + parseInt(arr[1], 2)
    }
    else if (p.includes("-")){
        arr = p.split("-");
        result = parseInt(arr[0], 2) - parseInt(arr[1], 2)
    }
    else if (p.includes("*")){
        arr = p.split("*");
        result = parseInt(arr[0], 2) * parseInt(arr[1], 2)
    }
   else if (p.includes("/")){
        arr = p.split("/");
        result = parseInt(arr[0], 2) / parseInt(arr[1], 2)
    }

    res.innerText = result.toString(2);
    p = "";
})
