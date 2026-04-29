// Last updated: 4/29/2026, 10:23:35 AM
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    const arr = [];
    for(let i = 0; i < n; i++) {
        arr.push(nums[i]);
        arr.push(nums[i+n]);
    }
    return arr;
};