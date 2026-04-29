// Last updated: 4/29/2026, 10:35:04 AM
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if(nums[mid] === target) {
            return true;
        }
        
        if(nums[left] === nums[mid] && nums[mid] === nums[right]) {
            left++;
            right--;
        } else if(nums[left] <= nums[mid]) {
            // left side is sorted
            if(nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            // right side is sorted
            if(nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return false;
};