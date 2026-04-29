// Last updated: 4/29/2026, 10:26:46 AM
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    
    const memo = new Array(m).fill(null).map(() => new Array(n).fill(null));
    
    const dp = (i, j) => {
        // console.log(`(${i}, ${j})`)
        if(i === m-1) {
            return matrix[i][j];
        }
        if(memo[i][j] !== null) {
            return memo[i][j];
        }
        
        const list = [ dp(i+1, j) ];
        if(j-1 >= 0) {
            list.push(dp(i+1, j-1));
        }
        if(j+1 < n) {
            list.push(dp(i+1, j+1));
        }
        memo[i][j] = matrix[i][j] + Math.min(...list);
        // console.log(`memo[${i}][${j}]=${memo[i][j]}`)
        return memo[i][j];
    }
    
    const list = [];
    for(let j = 0; j < n; j++) {
        list.push(dp(0, j));
    }
    // console.log(memo)
    return Math.min(...list);
};