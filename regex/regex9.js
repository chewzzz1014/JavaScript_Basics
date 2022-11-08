"use strict"
let wrongText = 'The sky is silver.';
let silverRegex = /silver/;
wrongText.replace(silverRegex, 'blue');

// capture group and replace them with group
'Code Camp'.replace(/(\w+)\s(\w+)/, '$2 $1');


// One Two Three => Three Two wrongTextlet str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = '$3 $2 $1'; // Change this line
let result = str.replace(fixRegex, replaceText);
