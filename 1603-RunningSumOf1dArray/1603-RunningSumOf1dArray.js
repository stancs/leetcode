// Last updated: 4/29/2026, 10:23:36 AM
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    const sums = [];
    let sum = 0;
    for(const num of nums) {
        sum += num;
        sums.push(sum);1
    }
    return sums;
};