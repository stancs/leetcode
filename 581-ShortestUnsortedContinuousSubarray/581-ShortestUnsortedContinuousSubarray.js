// Last updated: 4/29/2026, 10:29:17 AM
/**
 * @param {number[]} nums
 * @return {number}
 */
// 13:03s
// O(n^2) time | O(1) space
var findUnsortedSubarray = function(nums) {
    let left = 0, right = nums.length - 1;
    let isContinue = true;
    while(isContinue && left < right) {
        for(let i = left + 1; i < nums.length; i++) {
            if(nums[left] > nums[i]) {
                isContinue = false;
            }
        }
        if(isContinue) {
            left++;    
        }
    }
    isContinue = true;
    while(isContinue && left < right) {
        for(let i = right - 1; i >= 0; i--) {
            if(nums[right] < nums[i]) {
                isContinue = false;
            }
        }
        if(isContinue) {
            right--;    
        }
    }
    if(left === right) {
        return 0;
    } else {
        return right - left + 1;    
    }
};