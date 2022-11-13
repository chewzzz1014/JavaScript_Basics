//  looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument).
// Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
function whatIsInAName(collection, source) {
  const arr = [];
  let still_same = true;
  if (!source)
    return arr;

  collection.forEach((obj)=>{
        still_same = true;
        for (let p in source){
          if (!still_same)
            break;
          else{
            if (!obj.hasOwnProperty(p))
              still_same = false;
            else if (obj.hasOwnProperty(p) && obj[p]!==source[p])
              still_same = false;
          }
        }

        if (still_same)
          arr.push(obj)
  })

  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
