// Last updated: 4/29/2026, 10:22:00 AM
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
// 2022-12-07
// 09:26s
// O(e+v)
// O(e+v)
var validPath = function(n, edges, source, destination) {
    const adj = {};
    for(const [u, v] of edges) {
        if(adj[u] === undefined) {
            adj[u] = new Set();
        }
        adj[u].add(v);
        if(adj[v] === undefined) {
            adj[v] = new Set();
        }
        adj[v].add(u);
    }
    const visited = new Array(n).fill(false);
    const dfs = node => {
        if(node === destination) {
            return true;
        }
        const ends = adj[node];
        if(ends) {
            for(const end of ends) {
                if(!visited[end]) {
                    visited[end] = true;
                    if(dfs(end)) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
    
    visited[source] = true;
    return dfs(source);
};