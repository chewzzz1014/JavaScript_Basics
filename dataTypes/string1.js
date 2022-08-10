"use strict"

// uppercase the first character
function ucFirst (str){
  // if str is empty
  if (!str) return str;

  return str[0].toUpperCase() +str.slice(1);
}

// did the string contain specific substring?
function checkSpam(str){
  str = str.toLowerCase();

  return str.includes("viagra")|| str.includes("xx");
}

// truncate string
function truncate(str, n){
  if (str.length > n)
    return `${str.slice(0, n-1)}...`;
  else
    return str;
}

// extract the number
function extractCurrencyValue(str){
  return parseInt(str);
}
