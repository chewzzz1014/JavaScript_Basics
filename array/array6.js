function getSecondLargest(nums) {
    // Complete the function
    let max = Math.max(...nums);
    nums = nums.filter(ele => ele<max);
    return Math.max(...nums);
}
