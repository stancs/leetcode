// Last updated: 4/29/2026, 10:32:06 AM
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    const hash = {};
    for(const num of nums) {
        if(hash[num]) {
            hash[num]++
        } else {
            hash[num] = 1;
        }
    }
    const keys = Object.keys(hash);
    const output = [];
    for(const key of keys) {
        if(hash[key] === 1) {
            output.push(key);
        }
    }
    return output;
};