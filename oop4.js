function Cat (hasName=false){

    this.name =  "Meow Meow";
    if (hasName)
       this.name = prompt("Enter cat's name:");

    this.food = {
      "Favourite Food": "fish",
      "Hated Food": "vege",
      "Meals Per Day": 3,
    };

    this.owner = {
      "Name": "chewzzz",
      "Age": 20,
      "Country": "Malaysia",
      "Occupation": "student",
    };

     this.adoptCat = function (){
      let id = +prompt("Enter adopt id:");
      this.storeID(id);
      alert("Thank you for adopting "+this.name+"!");
    };

     this.storeID = function (id){
      this.owner["ID"] = id;
    }


}

let myCat = new Cat(true);

let title = ["owner", "food"];

for (let i=0; i<2; i++){
  alert("About "+ title[i]);
  for (let key in myCat[title[i]] )
    { alert( key +": "+ myCat[title[i]][key]); }
}


myCat.adoptCat();
alert("Your id is "+myCat.owner["ID"]);
