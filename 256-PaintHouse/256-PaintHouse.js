// Last updated: 4/29/2026, 10:32:11 AM
/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function(costs) {
    const n = costs.length;
    const memo = new Array(n).fill(null).map(() => new Array(3).fill(undefined));
    console.log(memo);
    
    const dp = (i, color1) => {
        if(i >= costs.length) {
            return 0;
        }
        if(memo[i][color1] !== undefined) {
            return memo[i][color1];
        }
        const color2 = (color1 + 1) % 3;
        const color3 = (color1 + 2) % 3;
        memo[i][color1] = costs[i][color1] + Math.min(dp(i+1, color2), dp(i+1, color3));
        return memo[i][color1];
    }
    return Math.min(dp(0, 0), dp(0, 1), dp(0, 2));
};