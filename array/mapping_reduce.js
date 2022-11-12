const watchList = require('./mapping_arr_data')

function getRating(watchList) {
  let nolan = watchList.filter((ele)=> ele.Director === 'Christopher Nolan').map((ele)=>{
    return ele.imdbRating
  })

  let count = 0;
   let averageRating = nolan.reduce((acc, ele, idx)=> {
        count ++;
        return acc+=Number(ele)
    }, 0)

  return averageRating / count;
}

console.log(getRating(watchList));
