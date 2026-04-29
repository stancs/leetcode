// Last updated: 4/29/2026, 10:20:25 AM
/**
 * @param {number[]} nums
 * @return {number}
 */
// 2022-12-11
// 05:59s
// O(n)
// O(n)
var mostFrequentEven = function(nums) {
    const map = {};
    for(const num of nums) {
        if(num % 2 === 0) {
            if(map[num] === undefined) {
                map[num] = 1;
            } else {
                map[num]++;
            }
        }
    }
    const keys = Object.keys(map);
    if(keys.length === 0) {
        return -1;
    }
    const values = Object.values(map);
    const max = Math.max(...values);
    const candidates = keys.filter(key => map[key] === max);
    return Math.min(...candidates);
};