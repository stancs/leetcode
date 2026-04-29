// Last updated: 4/29/2026, 10:22:36 AM
/**
 * @param {number[][]} matrix
 * @return {number}
 */
// 2022-12-13
// 51:00s
// O(m * n * log(n))
// O(m * n)
var largestSubmatrix = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const matrix2 = new Array(m).fill(null).map(() => new Array(n).fill(0));
    for(let j = 0; j < n; j++) {
        for(let i = 0; i < m; i++) {
            if(i === 0) {
                matrix2[i][j] = matrix[i][j];
                continue;
            }
            if(matrix[i][j] === 1) {
                matrix2[i][j] = matrix2[i-1][j] + 1;
            }
        }
    }
    // console.log(matrix);
    // console.log(matrix2);
    
    let max = 0;
    for(let i = 0; i < m; i++) {
        const row = matrix2[i].sort((a, b) => b - a);
        for(let j = 0; j < n; j++) {
            max = Math.max(max, (j + 1) * row[j]);
        }
    }
    return max;
    
};