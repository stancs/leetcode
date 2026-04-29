// Last updated: 4/29/2026, 10:20:03 AM
/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const onesRow = new Array(m).fill(0);
    const onesCol = new Array(n).fill(0);
    const zerosRow = new Array(m).fill(0);
    const zerosCol = new Array(n).fill(0);
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(grid[i][j] === 1) {
                onesRow[i]++;
            } else {
                zerosRow[i]++;
            }
        }
    }
    for(let j = 0; j < n; j++) {
        for(let i = 0; i < m; i++) {
            if(grid[i][j] === 1) {
                onesCol[j]++;
            } else {
                zerosCol[j]++;
            }
        }
    }
    // console.log(onesRow);
    // console.log(onesCol);
    // console.log(zerosRow);
    // console.log(zerosCol);
    const diff = new Array(m).fill(null).map(() => new Array(n));
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            diff[i][j] = onesRow[i] + onesCol[j] - zerosRow[i] - zerosCol[j];
        }
    }
    // console.log(diff);
    return diff;
};