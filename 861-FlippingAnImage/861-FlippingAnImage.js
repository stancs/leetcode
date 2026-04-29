// Last updated: 4/29/2026, 10:27:21 AM
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
// 12:20s
// O(n) time | O(1) space
var flipAndInvertImage = function(A) {
    const output = [];
    for(let i = 0; i < A.length; i++) {
        const row = [];
        for(let j = A[0].length - 1; j >= 0; j--) {
            let cell = A[i][j];
            cell = cell === 0? 1: 0;
            row.push(cell);            
        }
        output.push(row);
    }
    return output;
};