// Last updated: 4/29/2026, 10:21:52 AM
/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
// T: 3:17s
// TC: O(n)
// SC: O(n)
var construct2DArray = function(original, m, n) {
    if(original.length !== m * n) {
        return [];
    }
    
    const mat = new Array(m);
    for(let i = 0; i < mat.length; i++) {
        mat[i] = new Array(n);
    }
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            const element = original.shift();
            mat[i][j] = element;
        }
    }
    return mat;
};