"use strict"
let wrongText = 'The sky is silver.';
let silverRegex = /silver/;
wrongText.replace(silverRegex, 'blue');

// capture group and replace them with group
'Code Camp'.replace(/(\w+)\s(\w+)/, '$2 $1');
