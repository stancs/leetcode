// Last updated: 4/29/2026, 10:18:52 AM
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var orArray = function(nums) {
    const output = [];
    for(let i = 0; i < nums.length - 1; i++) {
        output.push(nums[i] | nums[i+1]);
    }
    return output;
};