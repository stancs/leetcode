// Last updated: 4/29/2026, 10:23:33 AM
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let deleted = false;
    let max = 0;
    let left = 0;
    for(let right = 0; right < nums.length; right++) {
        if(nums[right] === 0) {
            if(deleted) {
                while(left <= right) {
                    // console.log(`left:${left}, right: ${right}`)
                    if(nums[left] === 0) {
                        left++;
                        break;
                    }
                    left++;
                }
            } else {
                deleted = true;
            }
        }
        let currLen = right - left + 1;
        if(deleted) {
            currLen--;
        }
        if(currLen > max) {
            max = currLen;
        }
        // console.log(`left: ${left}, right: ${right}, deleted: ${deleted}, curr: ${right - left + 1}, max: ${max}`)
    }
    return deleted? max: max - 1;
};