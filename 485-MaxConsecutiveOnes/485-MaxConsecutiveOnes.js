// Last updated: 4/29/2026, 10:29:59 AM
/**
 * @param {number[]} nums
 * @return {number}
 */
// 2022-12-06
// 2:54s
// O(n)
// O(1)
var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let count = 0;
    for(const num of nums) {
        if(num === 1) {
            count++;
        } else {
            count = 0;
        }
        if(count > max) {
            max = count;
        }
    }
    return max;
};