// Last updated: 4/29/2026, 10:30:11 AM
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    const hash = {};
    for(const num of nums) {
        if(hash[num]) {
            hash[num]++;
        } else {
            hash[num] = 1;
        }
    }
    const keys = Object.keys(hash);
    return keys.filter(key => hash[key] === 2);
};