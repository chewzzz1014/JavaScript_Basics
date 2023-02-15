/*
  Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.
*/

function truthCheck(collection, pre) {

    // 2 possibilities:
    // A. It's an object, it has the property and the value is truthy
    // B. It's not object. It is truthy 
    collection.forEach(ele => {
        if (typeof ele === 'object' && ele.hasOwnProperty(pre) && ele[pre] || ele[pre])
            return;
        else
            return false
    })

    return true
}

truthCheck([{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "isBot");