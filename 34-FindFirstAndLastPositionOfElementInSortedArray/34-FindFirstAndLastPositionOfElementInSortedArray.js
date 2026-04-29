// Last updated: 4/29/2026, 10:36:14 AM
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const n = nums.length;
    if(nums.length === 0) {
        return [-1, -1];
    } else if(nums.length === 1) {
        if(nums[0] === target) {
            return [0, 0];
        } else {
            return [-1, -1];
        }
    }
    let left = 0;
    let right = nums.length - 1;
    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        console.log(`left: ${left}, mid: ${mid}, right: ${right}`);
        if(nums[mid] === target) {
            left = mid;
            right = mid;
            while(left - 1 >= 0 && nums[left - 1] === target) {
                left--;
            }
            while(right + 1 < n && nums[right + 1] === target) {
                right++;
            }
            return [left, right];
        }
        if(nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return [-1, -1];
};