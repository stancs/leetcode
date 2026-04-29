// Last updated: 4/29/2026, 10:32:49 AM
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length === 1) {
        return nums[0];
    }
    const n = nums.length;
    console.log(`nums: ${nums}`)
    const nums1 = nums.slice(0, n-1);
    console.log(`nums1: ${nums1}`)
    const nums2 = nums.slice(1);
    console.log(`nums2: ${nums2}`)
    
    const dp = (i, arr, memo) => {
        const n = arr.length;
        if(i >= n) {
            return 0;
        }
        if(memo[i] !== undefined) {
            return memo[i];
        }
        memo[i] = Math.max(arr[i] + dp(i+2, arr, memo), dp(i+1, arr, memo));
        return memo[i];
    }
    
    const memo1 = {}, memo2 = {};
    const m1 = dp(0, nums1, memo1);
    const m2 = dp(0, nums2, memo2);
    
    return Math.max(m1, m2);
};