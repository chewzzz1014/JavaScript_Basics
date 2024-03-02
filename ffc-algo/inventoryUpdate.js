function updateInventory(arr1, arr2) {
    const arr1Items =  arr1.map(ele => ele[1])
    const arr2Items = arr2.map(ele => ele[1])

    const updatedInventory = [...arr1.map((ele) => getTotal(ele,arr2, arr2Items)), ...arr2.filter(ele => !arr1Items.includes(ele[1]))]

    console.log(updatedInventory)
    return updatedInventory.sort((a,b) => a[1] !== b[1] ? a[1] < b[1] ? -1 : 1 : 0)
}

const getTotal = (item, arr2, arr2Items) => {
    const foundItemIdx = arr2Items.indexOf(item[1])
    return foundItemIdx>-1 ? [item[0] + arr2[foundItemIdx][0], item[1]] : item
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);