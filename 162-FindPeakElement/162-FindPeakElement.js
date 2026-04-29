// Last updated: 4/29/2026, 10:33:35 AM
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    while(left < right) {
        const mid = Math.floor((left + right) / 2);
        console.log(`left: ${left}, mid: ${mid}, right: ${right}`)
        if(nums[mid] < nums[mid + 1]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
};