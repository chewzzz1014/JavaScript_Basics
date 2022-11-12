import {watchList} from './mapping_arr_data'

const ratings = watchList.map((ele)=>{
  return {
    title: ele.Title,
    rating: ele.imdbRating
  }
})

console.log(JSON.stringify(ratings));
