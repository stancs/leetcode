// Last updated: 4/29/2026, 10:27:23 AM
/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
    let totalProfit = 0;
    for(const ability of worker) {
        let max = 0;
        for(let i = 0; i < difficulty.length; i++) {
            if(difficulty[i] <= ability) {
                max = Math.max(max, profit[i]);
            }
        }
        totalProfit += max;
    }
    return totalProfit;
};