const todos = ["Collect chicken eggs", "Clean the house"];

let option = prompt("What would you like to do?").trim();

while(option!=="quit" && option!=="q"){
  if (option==="list"){
    console.log("**************");
    for (let i=0; i<todos.length; i++)
      console.log(`${i}: ${todos[i]}`);
    console.log("**************");
  }
  else if (option==="new"){
    const newTodo = prompt("Ok, what's the new todo?");
    todos.push(newTodo);
    console.log(`${newTodo} added to list!`);
  } else if (option==="delete"){
    const index = parseInt(prompt("Ok, enter an index to delete:"));
    if (!Number.isNaN(index)){
      const deleted = todos.splice(index, 1);
      console.log(`${deleted} deleted!`);
    }
    else{
      console.log("Unknown index");
    }

  }
  option = prompt("What would you like to do?").trim();
}

console.log("OK, QUIT THE APP");
