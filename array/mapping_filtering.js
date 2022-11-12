const watchList = require('./mapping_arr_data')

const filteredList = watchList.filter((ele)=> Number(ele.imdbRating) > 8).map((ele)=>{
  return {
    title: ele.Title,
    rating: ele.imdbRating
  }
});


console.log(filteredList);
