// Last updated: 4/29/2026, 10:19:31 AM
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let val = init;
    for(let i = 0; i < nums.length; i++) {
        val = fn(val, nums[i]);
    }
    return val;
};