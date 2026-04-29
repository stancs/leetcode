// Last updated: 4/29/2026, 10:32:44 AM
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const hash = {};
    for(let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if(hash[num] !== undefined) {
            const i2 = hash[num];
            if(Math.abs(i - i2) <= k) {
                return true;
            }
        }
        hash[num] = i;
    }
    return false;
};