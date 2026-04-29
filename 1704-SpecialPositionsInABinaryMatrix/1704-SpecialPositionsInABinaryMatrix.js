// Last updated: 4/29/2026, 10:23:09 AM
/**
 * @param {number[][]} mat
 * @return {number}
 */
// T: 24:21s
// TC: O(n^2)
// SC: O(n^2)
var numSpecial = function(mat) {
    const nRow = mat.length;
    const nCol = mat[0].length;
    const rows = new Array(nRow);
    const cols = new Array(nCol);
    
    for(let i = 0; i < nRow; i++) {
        let countOne = 0; 
        let countZero = 0;
        let idx = -1;
        for(let j = 0; j < nCol; j++) {
            const num = mat[i][j];
            if(num === 1) {
                countOne++;
                idx = j;
            } else {
                countZero++;
            }
        }    
        if(countOne === 1 && countZero === nCol - 1) {
            rows[i] = idx;
        } else {
            rows[i] = null;
        }
    }
    
    for(let j = 0; j < nCol; j++) {
        let countOne = 0; 
        let countZero = 0;
        let idx = -1;
        for(let i = 0; i < nRow; i++) {
            const num = mat[i][j];
            if(num === 1) {
                countOne++;
                idx = i;
            } else {
                countZero++;
            }
        }    
        if(countOne === 1 && countZero === nRow - 1) {
            cols[j] = idx;
        } else {
            cols[j] = null;
        }
    }
    
    console.log(rows);
    console.log(cols);
    
    let count = 0;
    for(let i = 0; i < nRow; i++) {
        if(rows[i] !== null) {
            const col = rows[i];
            if(cols[col] !== null) {
                count++;
            }
        }
    }
    
    return count;
};