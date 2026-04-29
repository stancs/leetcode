// Last updated: 4/29/2026, 10:37:01 AM
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hash = {};
    for(let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const other = target - num;
        if(hash[other] !== undefined) {
            return [hash[other], i];
        }
        hash[num] = i;
    }
    return [];
};