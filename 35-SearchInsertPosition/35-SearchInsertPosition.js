// Last updated: 4/29/2026, 10:36:12 AM
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        console.log(`left: ${left}, mid: ${mid}, right: ${right}`)
        if(nums[mid] === target) {
            return mid;
        }
        if(nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;
};