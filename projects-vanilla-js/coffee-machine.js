// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

let hasWater = 400;
let hasMilk = 540;
let hasBean = 120;
let hasCup = 9;
let hasMoney = 550;

let action = input("Write action (buy, fill, take, remaining, exit): ")
while(action !== "exit"){
  if (action === "remaining") {
    console.log(
      `The coffee machine has:
      ${hasWater} ml of water
      ${hasMilk} ml of milk
      ${hasBean} g of coffee beans
      ${hasCup} disposable cups
      $${hasMoney} of money`);
  }
    else if (action === "buy"){
      buy();
    }
  else if (action === "fill"){
  let addWater = + input("Write how many ml of water you want to add: ");
  let addMilk = + input("Write how many ml of milk you want to add: ");
  let addBean = + input("Write how many grams of coffee beans you want to add: ");
  let addCup = + input("Write how many disposable cups you want to add: ");

  hasWater += addWater;
  hasMilk += addMilk;
  hasBean += addBean;
  hasCup += addCup;
} else if (action === "take"){
  console.log(`I gave you $${hasMoney}`);
  hasMoney = 0;
}


  action = input("Write action (buy, fill, take, remaining, exit): ")
}


function buy(){
  let option = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu: ")
  switch(option){
    case "1":
      if (hasWater>=250 && hasBean>=16){
        hasWater -= 250;
        hasBean -= 16;
        hasMoney += 4;
        hasCup -= 1;
        console.log("I have enough resources, making you a coffee!");
      }else{
          if (hasWater<250)
            console.log("Sorry, not enough water!");
          else
            console.log("Sorry, not enough coffee beans!")
      }

    break;
    case "2":
     if (hasWater>=350 && hasMilk>=75 &&hasBean>=20){
        hasWater -= 350;
        hasMilk -= 75;
        hasBean -= 20;
        hasMoney += 7;
        hasCup -= 1;
        console.log("I have enough resources, making you a coffee!");
      }else{
          if (hasWater<350)
            console.log("Sorry, not enough water!");
          else if (hasBean<20)
            console.log("Sorry, not enough coffee beans!")
          else
            console.log("Sorry, not enough milk!");

      }
    break;
    case "3":
    if (hasWater>=200 && hasMilk>=100 && hasBean>=12){
        hasWater -= 200;
        hasMilk -= 100;
        hasBean -= 12;
        hasMoney += 6;
        hasCup -= 1;
        console.log("I have enough resources, making you a coffee!");
      }else{
          if (hasWater<200)
            console.log("Sorry, not enough water!");
          else if (hasBean<12)
            console.log("Sorry, not enough coffee beans!");
          else
            console.log("Sorry, not enough milk!");
      }
    break;
    default:
      break;
  }

}
