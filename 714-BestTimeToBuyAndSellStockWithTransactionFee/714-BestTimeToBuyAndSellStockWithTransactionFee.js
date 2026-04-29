// Last updated: 4/29/2026, 10:28:30 AM
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    const n = prices.length;
    const memo = new Array(n).fill(null).map(() => new Array(2).fill(null));
    
    const dp = (i, holding) => {
        if(i >= prices.length) {
            return 0;
        }
        if(memo[i][holding] !== null) {
            return memo[i][holding];
        }
        
        const skip = dp(i + 1, holding);
        if(holding === 0) {
            memo[i][holding] = Math.max(skip, -prices[i] + dp(i + 1, 1));
            return memo[i][holding];
        } else {
            memo[i][holding] = Math.max(skip, prices[i] - fee + dp(i+1, 0));
            return memo[i][holding];
        }
    }
    
    return dp(0, 0);
};