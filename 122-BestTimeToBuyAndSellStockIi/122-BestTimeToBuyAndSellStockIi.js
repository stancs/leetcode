// Last updated: 4/29/2026, 10:34:23 AM
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const len = prices.length;
    let profit = 0;
    for(let i = 1; i < len; i++) {
        const prev = prices[i-1];
        const curr = prices[i];
        const diff = curr - prev;
        if(diff > 0) {
            profit += diff;
        }
    }
    return profit;
};