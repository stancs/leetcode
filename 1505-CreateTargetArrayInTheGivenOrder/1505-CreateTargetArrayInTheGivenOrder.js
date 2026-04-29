// Last updated: 4/29/2026, 10:23:59 AM
/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let target = [];
    for(let i = 0; i < nums.length; i++) {
        const val = nums[i];
        const idx = index[i];
        const pre = target.slice(0, idx);
        const post = target.slice(idx);
        target = pre.concat(val).concat(post);
    }
    return target;
};