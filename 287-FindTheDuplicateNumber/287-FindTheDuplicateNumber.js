// Last updated: 4/29/2026, 10:31:44 AM
/**
 * @param {number[]} nums
 * @return {number}
 */
// 2022-10-27
// 2:22s
// O(n)
// O(1)
var findDuplicate = function(nums) {
    const map = {};
    for(const num of nums) {
        if(map[num] === undefined) {
            map[num] = 1;
        } else {
            return num;
        }
    }
};