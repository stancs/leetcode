// Last updated: 4/29/2026, 10:29:05 AM
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    const n = nums.length;
    let sum = 0;
    for(let i = 0; i < k; i++) {
        sum += nums[i];
    }
    console.log(sum);
    let max = sum;
    for(let i = k; i < n; i++) {
        sum = sum + nums[i] - nums[i - k];
        console.log(sum);
        if(sum > max) {
            max = sum;
            console.log(`max: ${max}`)
        }
    }
    return max / k;
};