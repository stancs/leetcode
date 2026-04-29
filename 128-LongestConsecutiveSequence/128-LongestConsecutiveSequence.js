// Last updated: 4/29/2026, 10:34:14 AM
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const set = new Set();
    for(const num of nums) {
        set.add(num);
    }
    let max = 0;
    for(const num of nums) {
        if(!set.has(num - 1)) {
            let curr = num;
            let len = 1;
            while(set.has(curr + 1)) {
                curr++;
                len++;
            }
            max = Math.max(len, max);
        }
    }
    return max;
};