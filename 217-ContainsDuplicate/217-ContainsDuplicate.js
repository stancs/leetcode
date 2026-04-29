// Last updated: 4/29/2026, 10:32:46 AM
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// TC: O(n)
// SC: O(n)
var containsDuplicate = function(nums) {
    const map = {};
    for(const num of nums) {
        if(map[num] === undefined) {
            map[num] = 1;
        } else {
            return true;
        }
    }
    return false;
};