// Last updated: 4/29/2026, 10:35:18 AM
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const memo = new Array(n+1).fill(null);
    
    const dp = i => {
        if(i > n) {
            return 0;
        } else if(i === n) {
            return 1;
        }
        
        if(memo[i] !== null) {
            return memo[i];
        }
        memo[i] = dp(i+1) + dp(i+2);
        return memo[i];
    }
    
    return dp(0);
};