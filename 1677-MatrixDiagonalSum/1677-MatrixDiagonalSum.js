// Last updated: 4/29/2026, 10:23:12 AM
/**
 * @param {number[][]} mat
 * @return {number}
 */
// 6:40s
// O(n) time | O(1) space
var diagonalSum = function(mat) {
    const len = mat.length;
    let sum = 0, dig1 = 0, dig2 = 0;
    for(let i = 0; i < len; i++) {
        dig1 += mat[i][i];
        dig2 += mat[i][len - 1 - i];
    }
    if(len % 2 === 0) {
        return dig1 + dig2;
    } else {
        const centerIdx = Math.floor(len / 2);
        const centerVal = mat[centerIdx][centerIdx];
        return dig1 + dig2 - centerVal;
    }
};