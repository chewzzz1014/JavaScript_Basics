"use strict"

let url = "https://api.tvmaze.com/search/people?q=lauren";

// axios.get return promise
axios.get(url)
  .then(res=>{
    console.log(res.data[0].person);
  })


// aysnc await version
const getMovieData = async()=>{
  try{
    const data = await axios.get(url);
    console.log(data.data[0].person);
  } catch(e){
    console.log("Something wrong...", e);
  }
}
