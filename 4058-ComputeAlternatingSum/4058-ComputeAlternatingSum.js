// Last updated: 5/13/2026, 12:12:39 AM
/**
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSum = function(nums) {
    let sum = 0;
    for(let i = 0; i < nums.length; i++) {
        const k = i % 2 === 0? 1: -1;
        sum += k * nums[i];
    }
    return sum;
};