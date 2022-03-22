//map in JavaScript

let myMap = new Map()
let person = {"name":"chew"}    //an object

myMap.set(4,"four")
myMap.set(2,"two")
myMap.set(1, true)
myMap.set(0, false)
myMap.set("half", 0.5)
myMap.set("Quarter", 0.25)
myMap.set(person, "me")   //in map, object as key is allowed. object doesn't alllow this

alert(`Value of key "half" in myMap is ${myMap.get("half")}`)   //0.5
alert(`Value of key "Quarter" in myMap is ${myMap.get("Quarter")}`)   //0.25
alert(`Value of key, object person is ${myMap.get(person)}`)    //"me"

alert(`myMap has key 3? : ${myMap.has(3)}`)   //false
alert(`myMap has key 0? : ${myMap.has(0)}`)   //true

myMap.delete(4)
myMap.has(4) ? alert(`Value of key 4 is ${myMap.get(4)}`) : alert("Key 4 has been deleted!")

alert(`myMap has size ${myMap.size}`)

myMap.clear()

myMap ? alert("myMap still existed!") : alert("myMap has been deleted")   //all key-value pairs were deleted. but myMap still remained as empty Map
