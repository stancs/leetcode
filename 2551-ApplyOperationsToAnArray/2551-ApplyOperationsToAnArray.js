// Last updated: 4/29/2026, 10:20:19 AM
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 2022-11-11
// 05:56s
// O(n)
// O(n)
var applyOperations = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === nums[i+1]) {
            nums[i] *= 2;
            nums[i+1] = 0;
        }
    }
    console.log(nums);
    const filtered = nums.filter(num => num !== 0);
    const nZero = nums.length - filtered.length;
    return filtered.concat(new Array(nZero).fill(0));
};