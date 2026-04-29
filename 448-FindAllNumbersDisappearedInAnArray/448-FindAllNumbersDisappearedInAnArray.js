// Last updated: 4/29/2026, 10:30:14 AM
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        const num = Math.abs(nums[i]);
        const idx = num - 1;
        if(nums[idx] > 0) {
            nums[idx] = -nums[idx];
        }
    }
    const res = [];
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > 0) {
            res.push(i+1);
        }
    }
    return res;
};