// Last updated: 5/13/2026, 12:12:43 AM
/**
 * @param {number[][]} grid
 * @param {number} x
 * @param {number} y
 * @param {number} k
 * @return {number[][]}
 */
var reverseSubmatrix = function(grid, x, y, k) {
    const m = grid.length;
    const n = grid[0].length;
    const grid2 = new Array(m);
    for(let i = 0; i < m; i++) {
        grid2[i] = new Array(n).fill(0);
    }
    console.log(`m: ${m}`)
    console.log(`n: ${n}`)
    console.log(grid);
    console.log(grid2);
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(i >= x && i <= x + k - 1 && j >= y && j <= y + k - 1) {
                console.log(`grid2[${i}][${j}] = grid[${m-x-i}][${j}]`)
                grid2[i][j] = grid[x + k - 1 - (i - x)][j];
            } else {
                console.log(`grid2[${i}][${j}] = grid[${i}][${j}]`)
                grid2[i][j] = grid[i][j];
            }
        }
    }
    console.log(grid2);
    return grid2;
};