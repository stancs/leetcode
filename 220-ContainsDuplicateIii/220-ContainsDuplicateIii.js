// Last updated: 4/29/2026, 10:32:43 AM
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    for(let i = 0; i < nums.length-1; i++) {
        for(let j = i+1; j < nums.length; j++) {
            if(Math.abs(i-j) <= k && Math.abs(nums[i]-nums[j]) <= t) {
                return true;
            }
        }
    }
    return false;
};