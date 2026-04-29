// Last updated: 4/29/2026, 10:31:23 AM
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
// 2022-12-08
// 05:25s
// O(e+v)
// O(e+v)
var countComponents = function(n, edges) {
    const map = {};
    for(const [u, v] of edges) {
        if(map[u] === undefined) {
            map[u] = new Set();
        }
        map[u].add(v);
        if(map[v] === undefined) {
            map[v] = new Set();
        }
        map[v].add(u);
        
    }
    console.log(map);
    const visited = new Array(n).fill(false);
    let count = 0;
    const dfs = start => {
        const ends = map[start];
        if(ends) {
            for(const end of ends) {
                if(!visited[end]) {
                    visited[end] = true;
                    dfs(end);
                }
            }
        }
    }
    for(let i = 0; i < n; i++) {
        if(!visited[i]) {
            visited[i] = true;
            count++;
            dfs(i);
        }
    }
    return count;
};