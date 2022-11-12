const watchList = require('./mapping_arr_data')

const filteredList = watchList.filter((ele)=> Number(ele.imdbRating) > 8).map((ele)=>{
  return {
    title: ele.Title,
    rating: ele.imdbRating
  }
});


console.log(filteredList);



// square of positive integer
const squareList = arr => {
  return arr
          .filter((ele)=> ele>0 && Number.isInteger(ele))
          .map((ele)=> ele**2)

};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
