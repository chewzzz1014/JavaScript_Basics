let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// use mixin to add common behavior between unrelated objects
let glideMixin = function(obj){
  obj.glide = function(){
    console.log(`${obj.name} is gliding!`)
  }
}

glideMixin(bird)
glideMixin(boat)

bird.glide(); // Donald is gliding!
boat.glide(); // Warrior is gliding!
