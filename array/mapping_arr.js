let watchList = require('./mapping_arr_data')

const ratings = watchList.map((ele)=>{
  return {
    title: ele.Title,
    rating: ele.imdbRating
  }
})

console.log(JSON.stringify(ratings));



// mapping using forEach and callback
// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  const newArray = [];
  this.forEach((ele)=> newArray.push(callback(ele)))
  return newArray;
};

const new_s = s.myMap(function(item) {
  return item * 2;
});
