// Last updated: 4/29/2026, 10:21:10 AM
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 2022-12-11
// 06:48s
// O(n)
// O(n)
var divideArray = function(nums) {
    if(nums.length === 0) {
        return false;
    }
    const map = {};
    for(const num of nums) {
        if(map[num] === undefined) {
            map[num] = 1;
        } else {
            map[num]++;
        }
    }
    const keys = Object.keys(map);
    for(const key of keys) {
        if(map[key] % 2 === 1) {
            return false;
        }
    }
    return true;
};