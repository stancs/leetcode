// Last updated: 4/29/2026, 10:32:53 AM
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    nums.sort((a, b) => b-a);
    return nums[k-1];
};