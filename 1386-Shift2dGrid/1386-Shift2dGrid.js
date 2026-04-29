// Last updated: 4/29/2026, 10:24:43 AM
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */

// T= 11:59s
// TC= O(n^2)
// SC= O(n^2)
var shiftGrid = function(grid, k) {
    const nRows = grid.length;
    const nCols = grid[0].length;
    
    const size = nRows * nCols;
    const shift = k % size;
    
    const arr = [];
    for(let i = 0; i < nRows; i++) {
        for(let j = 0; j < nCols; j++) {
            arr.push(grid[i][j]);
        }
    }
    console.log(arr);
    const newArr = arr.slice(-shift).concat(arr.slice(0, size - shift));
    console.log(shift);
    console.log(newArr);
    
    const newGrid = new Array(nRows);
    for(let i = 0; i < nRows; i++) {
        newGrid[i] = new Array(nCols);
    }
    for(let i = 0; i < nRows; i++) {
        for(let j = 0; j < nCols; j++) {
            newGrid[i][j] = newArr.shift();
        }
    }
    console.log(newGrid);
    return newGrid;
};