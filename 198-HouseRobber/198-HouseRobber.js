// Last updated: 4/29/2026, 10:33:24 AM
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    /*
    dp[i]: max money when you rob houses up to ith(including) houses
    dp[i] = Max(nums[i] + dp[i + 2], nums[i+1] + dp[i+3])
    */
    const getNum = i => {
        if(i >= nums.length) {
            return 0;
        }
        return nums[i];
    }
    const hash = {};
    const dp = i => {
        if(i >= nums.length) {
            return 0;
        }
        if(hash[i] !== undefined) {
            return hash[i];
        }
        hash[i] = Math.max(getNum(i) + dp(i+2), getNum(i+1) + dp(i+3));
        return hash[i];
    }
    return dp(0);
};