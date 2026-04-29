// Last updated: 4/29/2026, 10:34:21 AM
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length == 0) {
        return 0;
    }
    let dp = new Array(prices.length).fill(0);
    
    for(let t = 1; t <= 2; t++){ 
        let min = prices[0];
        let max = 0;
        for(let i = 1; i < prices.length; i++){
            min = Math.min(min, prices[i] - dp[i]);
            max = Math.max(max, prices[i] - min);
            dp[i] = max;
        }
    }
    return dp.pop();
};