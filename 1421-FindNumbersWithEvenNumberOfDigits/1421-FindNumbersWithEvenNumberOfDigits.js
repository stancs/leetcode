// Last updated: 4/29/2026, 10:24:29 AM
/**
 * @param {number[]} nums
 * @return {number}
 */
// 1:15s
// O(n) time | O(1) space
var findNumbers = function(nums) {
    let count = 0;
    for(const num of nums) {
        const str = num.toString();
        if(str.length % 2 === 0) {
            count++;
        }
    }
    return count;
};