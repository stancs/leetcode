// Last updated: 4/29/2026, 10:27:38 AM
/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function(n) {
    const MOD = 1e9 + 7;
    
    if (n === 1) return 1;
    if (n === 2) return 2;
    
    let dp = new Array(n + 1).fill(0);
    let dp2 = new Array(n + 1).fill(0);
    
    dp[0] = 1;
    dp[1] = 1;
    dp[2] = 2;
    dp2[0] = 1;
    dp2[1] = 2;
    dp2[2] = 4;
    
    for (let i = 3; i <= n; i++) {
        dp[i] = (dp[i-1] + dp[i-2] + 2 * dp2[i-3]) % MOD;
        dp2[i] = (dp2[i-1] + dp[i]) % MOD;
    }
    
    return dp[n];
};