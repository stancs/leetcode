// Last updated: 4/29/2026, 10:20:33 AM
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} restricted
 * @return {number}
 */
// 2022-12-15
// 09:07s
// O(n+e) => O(n)
// O(n+e) => O(n)
var reachableNodes = function(n, edges, restricted) {
    const adj = {};
    const restrictedSet = new Set(restricted);
    for(const [u, v] of edges) {
        if(!restrictedSet.has(u) && !restrictedSet.has(v)) {
            if(adj[u] === undefined) {
                adj[u] = new Set();
            }
            adj[u].add(v);
            if(adj[v] === undefined) {
                adj[v] = new Set();
            }
            adj[v].add(u);
        }
    }
    console.log(adj);
    const visited = new Array(n).fill(false);
    
    const dfs = node => {
        const neighbors = adj[node];
        if(neighbors) {
            for(const neighbor of neighbors) {
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    dfs(neighbor);
                }
            }
        }
    }
    visited[0] = true;
    dfs(0);
    return visited.filter(node => node === true).length;
};