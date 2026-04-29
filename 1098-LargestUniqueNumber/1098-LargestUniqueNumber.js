// Last updated: 4/29/2026, 10:25:54 AM
/**
 * @param {number[]} nums
 * @return {number}
 */
var largestUniqueNumber = function(nums) {
    const map = {};
    for(const num of nums) {
        if(map[num] === undefined) {
            map[num] = 1;
        } else {
            map[num]++;
        }
    }
    const keys = Object.keys(map);
    const sorted = keys.filter(key => map[key] === 1).sort((a, b) => a - b);
    if(sorted.length > 0) {
        return sorted[sorted.length - 1];
    } else {
        return -1;
    }
};