// Last updated: 4/29/2026, 10:29:24 AM
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let count = 0;
    const hash = {
        0: 1,
    };
    let sum = 0;
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if(hash[sum - k]) {
            count += hash[sum - k];
        }
        if(!hash[sum]) {
            hash[sum] = 1;
        } else {
            hash[sum]++;
        }
    }
    return count;
};