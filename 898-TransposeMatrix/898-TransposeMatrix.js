// Last updated: 4/29/2026, 10:27:09 AM
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
// 3:00s
// O(n^2) time | O(n^2) space
var transpose = function(A) {
    const maxRow = A.length;
    const maxCol = A[0].length;
    const output = [];
    for(let i = 0; i < maxCol; i++) {
        const row = [];
        for(let j = 0; j < maxRow; j++) {
            row.push(A[j][i]);
        }
        output.push(row);
    }
    return output;
};