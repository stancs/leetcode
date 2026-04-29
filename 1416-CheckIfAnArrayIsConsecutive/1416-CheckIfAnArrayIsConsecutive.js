// Last updated: 4/29/2026, 10:24:26 AM
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 2022-12-06
// 3:39s
// O(n)
// O(n)
var isConsecutive = function(nums) {
    const max = Math.max(...nums);
    const min = Math.min(...nums);
    const len = nums.length;
    if(max - min !== len - 1) {
        return false;
    }
    const map = {};
    for(const num of nums) {
        if(map[num] === undefined) {
            map[num] = 1;
        } else {
            return false;
        }
    }
    return true;
};