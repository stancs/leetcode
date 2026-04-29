// Last updated: 4/29/2026, 10:34:08 AM
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const map = {};
    for(const num of nums) {
        if(map[num] === undefined) {
            map[num] = 1;
        } else {
            map[num]++;
        }
    }
    console.log(map);
    const keys = Object.keys(map);
    for(const key of keys) {
        if(map[key] === 1) {
            return parseInt(key);
        }
    }
};