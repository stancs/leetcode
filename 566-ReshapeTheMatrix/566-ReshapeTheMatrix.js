// Last updated: 4/29/2026, 10:29:20 AM
/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
// 2022-11-09
// 08:37s
// O(m*n)
// O(m*n)
var matrixReshape = function(mat, r, c) {
    const m = mat.length;
    const n = mat[0].length;
    
    if((m * n !== r * c) || (m <= r && n <= c)) {
        return mat;
    }
    
    const newMat = new Array(r).fill(null).map(() => new Array(c));
    const linear = [];
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            linear.push(mat[i][j]);
        }
    }
    for(let i = 0; i < r; i++) {
        for(let j = 0; j < c; j++) {
            newMat[i][j] = linear.shift();
        }
    }
    return newMat;
};
