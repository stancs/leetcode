// Last updated: 5/5/2026, 10:00:41 PM
1/**
2 * @param {number[][]} grid
3 * @param {number} x
4 * @param {number} y
5 * @param {number} k
6 * @return {number[][]}
7 */
8var reverseSubmatrix = function(grid, x, y, k) {
9    const m = grid.length;
10    const n = grid[0].length;
11    const grid2 = new Array(m);
12    for(let i = 0; i < m; i++) {
13        grid2[i] = new Array(n).fill(0);
14    }
15    console.log(`m: ${m}`)
16    console.log(`n: ${n}`)
17    console.log(grid);
18    console.log(grid2);
19    for(let i = 0; i < m; i++) {
20        for(let j = 0; j < n; j++) {
21            if(i >= x && i <= x + k - 1 && j >= y && j <= y + k - 1) {
22                console.log(`grid2[${i}][${j}] = grid[${m-x-i}][${j}]`)
23                grid2[i][j] = grid[x + k - 1 - (i - x)][j];
24            } else {
25                console.log(`grid2[${i}][${j}] = grid[${i}][${j}]`)
26                grid2[i][j] = grid[i][j];
27            }
28        }
29    }
30    console.log(grid2);
31    return grid2;
32};