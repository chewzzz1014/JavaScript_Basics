"use strict"

// newer way to make request via js that supports promise

// fetch will return a promise
let url = "https://api.tvmaze.com/search/people?q=lauren";
fetch(url)
    .then(res =>{
      console.log("DONE!!", res);
      return res.json();  // res.json() return a promise
  })
    .then(data => {
      console.log("Data Parsed!!", data);
    })
    .catch(res => {
      console.log("Something wrong...", res);
  });





// async await version (more simplified)
async function getData(){
  try{

  console.log("Let's start...");
  const req = await fetch(url);
  const dataJson = await req.json();
  console.log("DONE!!!!!");
  console.log("Here's the first movie data", dataJson[0]);
}
catch(err){
  console.log("Something wrong...");
}
}
