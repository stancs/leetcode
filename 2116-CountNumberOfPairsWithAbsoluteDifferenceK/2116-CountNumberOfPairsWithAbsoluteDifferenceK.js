// Last updated: 4/29/2026, 10:21:57 AM
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
    let count = 0;
    for(let i = 0; i < nums.length - 1; i++) {
        for(let j = i+1; j < nums.length; j++) {
            if(abs(nums[i] - nums[j]) === k) {
                count++;
            }
        }
    }
    return count;
};

function abs(x) {
    if(x >= 0) {
        return x;
    } else {
        return -x;
    }
}