// Last updated: 4/29/2026, 10:32:10 AM
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
// 2022-11-03
// X
// O(n)
// O(n)
var validTree = function(n, edges) {
    const adj = new Array(n).fill(null).map(() => new Set());
    const queue = [ 0 ];
    const visited = new Set();
    for(const [u, v] of edges) {
        adj[u].add(v);
        adj[v].add(u);
    }
    console.log(adj);
    
    while(queue.length !== 0) {
        const start = queue.shift();
        
        if(visited.has(start)) {
            return false;
        }
        visited.add(start);
        const ends = adj[start];
        if(ends) {
            for(const end of adj[start]) {
                queue.push(end);
                adj[end].delete(start);
            }    
        }
    }
    return visited.size === n;
}

var validTree = function(n, edges) {
    const adj = new Array(n).fill(null).map(() => new Set());
    const visited = new Set();
    for(const [u, v] of edges) {
        adj[u].add(v);
        adj[v].add(u);
    }
    console.log(adj);
    
    let queue = [ 0 ];
    while(queue.length !== 0) {
        const newQueue = [];
        for(const start of queue) {
            if(visited.has(start)) {
                return false;
            }
            visited.add(start);
            const ends = adj[start];
            if(ends) {
                for(const end of ends) {
                    newQueue.push(end);
                    adj[end].delete(start);
                }
            }
        }
        queue = newQueue;
    }
    return visited.size === n;
}