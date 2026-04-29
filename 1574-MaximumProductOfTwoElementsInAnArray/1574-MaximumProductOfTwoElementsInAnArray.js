// Last updated: 4/29/2026, 10:23:39 AM
/**
 * @param {number[]} nums
 * @return {number}
 */
// 2:00s
// O(n^2) time | O(1) space
var maxProduct = function(nums) {
    let max = -Infinity;
    for(let i = 0; i < nums.length-1; i++) {
        for(let j = i+1; j < nums.length; j++) {
            const prod = (nums[i] - 1) * (nums[j] - 1);
            if(prod > max) {
                max = prod;
            }
        }
    }
    return max;
};