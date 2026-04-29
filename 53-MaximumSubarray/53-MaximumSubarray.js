// Last updated: 4/29/2026, 10:35:45 AM
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(nums.length === 0) {
        return;
    }
    const sums = new Array(nums.length).fill(0);
    sums[0] = nums[0];
    let max = nums[0];
    for(let i = 1; i < nums.length; i++) {
        sums[i] = Math.max(sums[i-1], 0) + nums[i];
        if(sums[i] > max) {
            max = sums[i];
        }
    }
    return max;
};