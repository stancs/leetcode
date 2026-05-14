// Last updated: 5/13/2026, 6:15:54 PM
1/**
2 * @param {number} n
3 * @param {number[][]} edges
4 * @return {number[]}
5 */
6var findMinHeightTrees = function(n, edges) {
7    const map = {};
8    for(const [a, b] of edges) {
9        if(map[a] === undefined) {
10            map[a] = [b];
11        } else {
12            map[a].push(b);
13        }
14        if(map[b] === undefined) {
15            map[b] = [a];
16        } else {
17            map[b].push(a);
18        }
19    }
20    // console.log(map);
21
22    const bft = (i) => {
23        let queue = [i];
24        const visited = {};
25        let height = 0;
26        while(queue.length !== 0) {
27            // console.log(`queue: ${queue}`)
28            let newQueue = [];
29            for(const src of queue) {
30                if(visited[src] === undefined) {
31                    visited[src] = true;
32                    const tgtList = map[src];
33                    if(Array.isArray(tgtList)) {
34                        for(const node of tgtList) {
35                            if(visited[node] === undefined) {
36                                newQueue.push(node);
37                            }
38                        }
39                    }
40                } 
41            }
42            queue = newQueue;
43            if(newQueue.length > 0) {
44                height++;
45            }
46            // console.log(`visited: `)
47            // console.log(visited)
48            // console.log(`height: ${height}`)
49        }
50        return height;
51    }
52
53    let output = [];
54    let minHeight = Number.MAX_SAFE_INTEGER;
55    for(let i = 0; i < n; i++) {
56        const height = bft(i);
57        // console.log(`[${i}] height: ${height}`)
58        if(height < minHeight) {
59            output = [i];
60            minHeight = height;
61        } else if(height == minHeight) {
62            output.push(i);
63        }
64    }
65    return output;
66};
67
68var findMinHeightTrees = function(n, edges) {
69    if(n === 1) {
70        return [0];
71    }
72
73    const graph = Array.from({ length: n }, () => new Set());
74
75    for(const [a, b] of edges) {
76        graph[a].add(b);
77        graph[b].add(a);
78    }
79
80    console.log(graph);
81
82    let leaves = [];
83
84    for(let i = 0; i < n; i++) {
85        if(graph[i].size === 1) {
86            leaves.push(i);
87        }
88    }
89
90    let remaining = n;
91
92    while(remaining > 2) {
93        remaining -= leaves.length;
94        const newLeaves = [];
95
96        for(const leaf of leaves) {
97            const neighbor = [...graph[leaf]][0];
98            graph[neighbor].delete(leaf);
99
100            if(graph[neighbor].size === 1) {
101                newLeaves.push(neighbor);
102            }
103        }
104
105        leaves = newLeaves;
106    }
107
108    return leaves;
109}
110