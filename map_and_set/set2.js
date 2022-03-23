//filter unique array elements with Set
function unique(arr) {
  return Array.from(new Set(arr));    //array => set => return as array
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // Hare, Krishna, :-O


//filter anagrams (words that have same number of same letters in different order)
function aclean (arr){

    let map = new Map ();
    let words;
    arr.forEach(function(item){
      words = item.toLowerCase().split("").sort().join("");
      if (!map.has(words))
        map.set(words, item)
    });

      return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"



//iterable keys

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");
