// Last updated: 4/29/2026, 10:31:59 AM
/**
 * @param {number[]} nums
 * @return {number}
 */
// 2022-11-15
// 1:37s
// O(n)
// O(1)
var missingNumber = function(nums) {
    let sum = 0;
    for(const num of nums) {
        sum += num;
    }
    const n = nums.length;
    return (n * (n + 1) / 2) - sum;
};