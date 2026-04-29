// Last updated: 4/29/2026, 10:35:26 AM
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const dp = new Array(m).fill(null).map(() => new Array(n).fill(Infinity));
    console.log(dp);
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(i === 0 && j === 0) {
                dp[i][j] = grid[i][j];
            } else {
                const up = i-1 >= 0? dp[i-1][j]: Infinity;
                const left = j-1 >= 0? dp[i][j-1]: Infinity;
                dp[i][j] = Math.min(up + grid[i][j], left + grid[i][j]);
                console.log(`dp[${i}][${j}] = ${dp[i][j]}`)    
            }
        }
    }
    console.log(dp);
    return dp[m-1][n-1];
};