// Last updated: 4/29/2026, 10:32:54 AM
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left = 0;
    let right = 0;
    const len = nums.length;
    let sum = nums[0];
    let minLen = Infinity;
    while(right < len) {
        if(sum < target) {
            right++;
            sum += nums[right];
        } else {
            while(sum >= target) {
                const len = right - left + 1;
                if(len < minLen) {
                    minLen = len;
                }
                sum -= nums[left];
                left++;
            }
        }
    }
    if(minLen === Infinity) {
        return 0;
    } else {
        return minLen;
    }
};