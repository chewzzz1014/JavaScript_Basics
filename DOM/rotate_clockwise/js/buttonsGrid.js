// We want to create nine buttons enclosed in a div, laid out so they form a  grid. Each button has a distinct label from 1 to 9 , and the labels on the outer buttons must rotate in the clockwise direction each time we click the middle button.

const btns = document.querySelectorAll("button");

const btnsOrder = [0, 1, 2, 5, 8, 7, 6, 3];
const nums = [1, 2, 3, 6, 9, 8, 7, 4];

btns[4].addEventListener("click", function(event){
    nums.unshift(nums.pop());
    for(let idx=0; idx<8; idx++){
        btns[btnsOrder[idx]].innerText = nums[idx];
    }
});
