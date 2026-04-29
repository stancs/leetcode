// Last updated: 4/29/2026, 10:31:08 AM
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let min = Infinity;
    let middle = Infinity;

    for (let num of nums) {
        if (num <= min) {
            min = num;
        } else if (num <= middle) {
            middle = num;
        } else {
            return true;
        }
    }

    return false;
};