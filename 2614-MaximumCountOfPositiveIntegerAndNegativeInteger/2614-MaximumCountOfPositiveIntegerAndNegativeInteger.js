// Last updated: 4/29/2026, 10:20:02 AM
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let countPositive = 0;
    let countNegative = 0;
    for(const num of nums) {
        if(num < 0) {
            countNegative++;
        }
        if(num > 0) {
            countPositive++;
        }
    }
    return Math.max(countPositive, countNegative);
};