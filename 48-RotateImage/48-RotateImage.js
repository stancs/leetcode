// Last updated: 4/29/2026, 10:35:52 AM
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;

    const rotated = new Array(m).fill(null).map(() => new Array(n));

    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            rotated[i][j] = matrix[i][j];
        }
    }

    /*
    (0,0) => (0, n-1)
    (0,1) => (1, n-1)
    (0,2) => (2, n-1)
    (0,k) => (k, n-1)
    */
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            matrix[j][n-1-i] = rotated[i][j];
        }
    }
};