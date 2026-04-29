// Last updated: 4/29/2026, 10:31:30 AM
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const n = nums.length;
    const dp = new Array(n+1).fill(1);
    console.log(dp);
    
    for(let i = 1; i < n; i++) {
        let max = 1;
        for(let j = 0; j < i; j++) {
            if(nums[j] < nums[i]) {
                max = Math.max(max, dp[j]+1);
            }
        }
        dp[i] = max;
        console.log(dp);
    }
    return Math.max(...dp);
};