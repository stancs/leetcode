// Last updated: 4/29/2026, 4:31:02 PM
1/**
2 * @param {number[][]} grid
3 * @param {number} x
4 * @return {number}
5 */
6 /*
7var minOperations = function(grid, x) {
8    const m = grid.length;
9    const n = grid[0].length;
10    console.log(`m: ${m}, n: ${n}`)
11    let remainder = null;
12    const arr = [];
13    for(let i = 0; i < m; i++) {
14        for(let j = 0; j < n; j++) {
15            arr.push(grid[i][j]);
16            const newRemainder = grid[i][j] % x;
17            if(remainder === null) {
18                remainder = newRemainder;
19            } else if(remainder !== newRemainder) {
20                return -1;
21            }
22        }
23    }
24    arr.sort((a, b) => a - b);
25    console.log(arr)
26    const medianIdx1 = Math.floor(m * n / 2) - 1;
27    const medianIdx2 = medianIdx1 + 1;
28    const count = m * n;
29    console.log(`median idx1: ${medianIdx1} idx2: ${medianIdx2}`)
30    console.log(`count: ${count}`)
31    let median;
32    if(count === 1) {
33        median = arr[0];
34    } else {
35        if(count % 2 === 0) {
36            center = (arr[medianIdx1] + arr[medianIdx2]) / 2;
37            const d1 = center - arr[medianIdx1];
38            const d2 = arr[medianIdx2] - center;
39            if(d1 > d2) {
40                median = arr[medianIdx2];
41            } else {
42                median = arr[medianIdx1];
43            }
44        } else {
45            median = arr[medianIdx1];
46        }
47    }
48    
49    console.log(`median: ${median}`)
50    let num = 0;
51    for(let i = 0; i < m; i++) {
52        for(let j = 0; j < n; j++) {
53            const val = grid[i][j];
54            num += Math.abs(val - median) / x;
55        }
56    }
57    return num;
58};
59*/
60
61var minOperations = function(grid, x) {
62    const arr = [];
63
64    for (let row of grid) {
65        for (let val of row) {
66            arr.push(val);
67        }
68    }
69
70    const remainder = arr[0] % x;
71
72    for (let val of arr) {
73        if (val % x !== remainder) {
74            return -1;
75        }
76    }
77
78    arr.sort((a, b) => a - b);
79
80    const median = arr[Math.floor(arr.length / 2)];
81
82    let operations = 0;
83
84    for (let val of arr) {
85        operations += Math.abs(val - median) / x;
86    }
87
88    return operations;
89};