// Last updated: 4/29/2026, 10:26:12 AM
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
  let left = 0;
  let countFlip = 0;
  let currOnes = 0;
  let max = 0;
  for(let right = 0; right < nums.length; right++) {
    if(nums[right] === 0) {
        if(countFlip < k) {
            countFlip++;
        } else {
            while(left <= right) {
                if(nums[left] === 0) {
                    left++;
                    break;
                }
                left++;
            }
        }
    }
    let curr = right - left + 1;
    if(curr > max) {
        max = curr;
    }
  }
  return max;
};