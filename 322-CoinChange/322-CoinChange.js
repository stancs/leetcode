// Last updated: 4/29/2026, 10:31:19 AM
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    for(const coin of coins) {
        console.log(`coin: ${coin}`)
        for(let i = coin; i <= amount; i++) {
            dp[i] = Math.min(dp[i], dp[i-coin] + 1); 
        }
        console.log(dp);
    }
    return dp[amount] === Infinity? -1: dp[amount];
};