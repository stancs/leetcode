// Last updated: 4/29/2026, 10:33:16 AM
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    // skip: dp(i+1, holding, remain)
    // buy: -prices[i] + dp(i+1, True, remain)
    // sell: prices[i] + dp(i+1, False, remain-1)
    // memo: memo[n+1][k+1][0/1]
    
    const memo = [];
    for(let i = 0; i < prices.length; i++) {
        memo.push([]);
        for(let j = 0; j < 2; j++) {
            memo[i].push([]);
            for(let p = 0; p < k + 1; p++) {
                memo[i][j].push(-1);
            }
        }
    }
    console.log(memo);
    const dp = (i, holding, remain) => {
        if(i >= prices.length) {
            return 0;
        }
        if(memo[i][holding][remain] !== -1) {
            return memo[i][holding][remain];
        }
        
        const skip = dp(i+1, holding, remain);
        if(holding !== 0 && remain > 0) {
            const res = Math.max(prices[i] + dp(i+1, 0, remain - 1), skip);
            memo[i][holding][remain] = res;
            return res;
        }
        const res = Math.max(-prices[i] + dp(i+1, 1, remain), skip);
        memo[i][holding][remain] = res;
        return res;
    }
    
    return dp(0, 0, k);
};