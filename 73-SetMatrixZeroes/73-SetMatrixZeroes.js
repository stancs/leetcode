// Last updated: 4/29/2026, 10:35:13 AM
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;

    const rows = new Array(m).fill(false);
    const cols = new Array(n).fill(false);

    const copyMatrix = matrix.map(row => [...row]);

    const fillRows = row => {
        for(let j = 0; j < n; j++) {
            matrix[row][j] = 0;
        }
    }
    const fillCols = col => {
        for(let i = 0; i < m; i++) {
            matrix[i][col] = 0;
        }
    }

    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            const val = copyMatrix[i][j];
            if(val === 0) {
                if(!rows[i]) {
                    fillRows(i);
                    rows[i] = true;
                }
                if(!cols[j]) {
                    fillCols(j);
                    cols[j] = true;
                }
            }
        }
    }
};