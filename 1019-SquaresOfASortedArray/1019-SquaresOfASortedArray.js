// Last updated: 4/29/2026, 10:26:32 AM
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    return nums.map(num => num*num).sort((a, b) => a - b);
};

var sortedSquares = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    const arr = [];
    while(left <= right) {
        let square;
        if(Math.abs(nums[left]) < Math.abs(nums[right])) {
            square = nums[right];
            right--;
        } else {
            square = nums[left];
            left++;
        }
        arr.unshift(square * square);
    }
    return arr;
};