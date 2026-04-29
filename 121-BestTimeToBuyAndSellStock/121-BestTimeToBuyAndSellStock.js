// Last updated: 4/29/2026, 10:34:24 AM
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0];
    let maxProfit = 0;
    for(let i = 1; i < prices.length; i++) {
        const price = prices[i];
        const profit = price - min;
        if(profit > maxProfit) {
            maxProfit = profit;
        }
        if(price < min) {
            min = price;
        }
        // console.log(`idx: ${i}, price: ${price}, `)
    }
    return maxProfit;
};