// import package
const jokes = require("give-me-a-joke");

console.dir(jokes); // list methods in the package


jokes.getRandomDadJoke(function (joke){
   console.log(joke);
})
