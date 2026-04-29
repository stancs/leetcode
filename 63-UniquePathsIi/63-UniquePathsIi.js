// Last updated: 4/29/2026, 10:35:33 AM
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    if(obstacleGrid[0][0] === 1) {
        return 0;
    }
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    
    if(m === 1 && n === 1) {
        return obstacleGrid[0][0] === 0? 1: 0
    }
    
    const memo = new Array(m).fill(null).map(() => new Array(n).fill(null));
    
    const dp = (i, j) => {
        if(i === m-1 && j === n-1) {
            return 1;
        }
        if(memo[i][j] !== null) {
            return memo[i][j];
        }
        
        let right = 0, bottom = 0;
        if(i < m-1) {
            bottom = obstacleGrid[i+1][j] === 0? dp(i+1, j): 0;
        }
        if(j < n-1) {
            right = obstacleGrid[i][j+1] === 0? dp(i, j+1): 0;
        }
        memo[i][j] = bottom + right;
        return memo[i][j];
    }
    
    return dp(0, 0);
};