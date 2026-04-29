// Last updated: 4/29/2026, 10:23:38 AM
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    const map = {};
    for(const [u, v] of connections) {
        if(map[u] === undefined) {
            map[u] = new Set();
        }
        map[u].add(v);
        if(map[v] === undefined) {
            map[v] = new Set();
        }   
        map[v].add(u);
    }
    // console.log(map);
    const visited = new Array(n).fill(0);
    
    const dfs = (i, edges) => {
        visited[i] = 1;
        const neighbors = map[i];
        // console.log(`node: ${i}, neighbors: ${[...neighbors]}`);
        // console.log(`visited: ${visited}`)
        // console.log(`edges:`);
        // console.log(edges)
        for(const neighbor of neighbors) {
            if(!visited[neighbor]) {
                edges.push([neighbor, i]);
                dfs(neighbor, edges);
            }
        }
    }
    const edges = [];
    dfs(0, edges);
    // console.log(edges);
    const edgeMap = {};
    for(const [start, end] of edges) {
        const min = Math.min(start, end);
        const max = Math.max(start, end);
        const key = `${min}#${max}`;
        edgeMap[key] = [start, end];
    }
    let count = 0;
    for(const [u, v] of connections) {
        const min = Math.min(u, v);
        const max = Math.max(u, v);
        const key = `${min}#${max}`;
        const [start, end] = edgeMap[key];
        if(start === v && end === u) {
            count++;
        }
    }
    return count;
};