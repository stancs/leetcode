// Last updated: 4/29/2026, 10:23:22 AM
/**
 * @param {number[]} nums
 * @return {number}
 */
// 2:23s
// O(n^2) time | O(1) space
var numIdenticalPairs = function(nums) {
    const len = nums.length;
    let count = 0;
    for(let i = 0; i < len - 1; i++) {
        for(let j = i+1; j < len; j++) {
            if(nums[i] === nums[j]) {
                count++;
            }
        }
    }
    return count;
};