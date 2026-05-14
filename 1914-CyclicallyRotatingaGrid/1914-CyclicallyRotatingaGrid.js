// Last updated: 5/13/2026, 6:23:02 PM
1/**
2 * @param {number[][]} grid
3 * @param {number} k
4 * @return {number[][]}
5 */
6var rotateGrid = function(grid, k) {
7    const m = grid.length;
8    const n = grid[0].length;
9    const layers = Math.min(m, n) / 2;
10
11    for (let layer = 0; layer < layers; layer++) {
12        const values = [];
13
14        const top = layer;
15        const left = layer;
16        const bottom = m - 1 - layer;
17        const right = n - 1 - layer;
18
19        // 1. Extract the layer in counter-clockwise order
20        // Top row (left -> right)
21        for (let c = left; c <= right; c++) {
22            values.push(grid[top][c]);
23        }
24
25        // Right column (top+1 -> bottom-1)
26        for (let r = top + 1; r < bottom; r++) {
27            values.push(grid[r][right]);
28        }
29
30        // Bottom row (right -> left)
31        for (let c = right; c >= left; c--) {
32            values.push(grid[bottom][c]);
33        }
34
35        // Left column (bottom-1 -> top+1)
36        for (let r = bottom - 1; r > top; r--) {
37            values.push(grid[r][left]);
38        }
39
40        // 2. Compute effective rotation
41        const len = values.length;
42        const shift = k % len;
43
44        // Rotating counter-clockwise means left shift
45        const rotated = values.slice(shift).concat(values.slice(0, shift));
46
47        // 3. Put rotated values back
48        let idx = 0;
49
50        // Top row
51        for (let c = left; c <= right; c++) {
52            grid[top][c] = rotated[idx++];
53        }
54
55        // Right column
56        for (let r = top + 1; r < bottom; r++) {
57            grid[r][right] = rotated[idx++];
58        }
59
60        // Bottom row
61        for (let c = right; c >= left; c--) {
62            grid[bottom][c] = rotated[idx++];
63        }
64
65        // Left column
66        for (let r = bottom - 1; r > top; r--) {
67            grid[r][left] = rotated[idx++];
68        }
69    }
70
71    return grid;
72};