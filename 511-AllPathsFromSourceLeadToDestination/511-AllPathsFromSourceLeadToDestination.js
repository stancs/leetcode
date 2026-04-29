// Last updated: 4/29/2026, 10:29:46 AM
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var leadsToDestination = function(n, edges, source, destination) {
    const visited = new Array(n).fill(false);
    const adj = {};
    for(const [u, v] of edges) {
        if(adj[u] === undefined) {
            adj[u] = new Set();
        }
        adj[u].add(v);
    }
    // console.log(adj);
    
    const backtrack = (node, processed) => {
        if(processed.has(node)) {
            return true;
        }
        // console.log(node);
        if(node === destination && !adj[node]) {
            return true;
        }
        const ends = adj[node];
        if(ends) {
            for(const end of ends) {
                if(!visited[end]) {
                    visited[end] = true;
                    ret = backtrack(end, processed);
                    visited[end] = false;
                    if(!ret) {
                        return false;
                    }
                } else {
                    // If we reach to a cycle, then we return false
                    return false;
                }
            }
        } else {
            return false;
        }
        processed.add(node);
        return true;
    }
    const processed = new Set();
    return backtrack(source, processed);
};

// var leadsToDestination = function(n, edges, source, destination) {
//     const adj = {};
//     for(const [u, v] of edges) {
//         if(adj[u] === undefined) {
//             adj[u] = new Set();
//         }
//         adj[u].add(v);
//     }
//     // console.log(adj);
    
//     const dfs = (node, visited, processed) => {
//         if(processed.has(node)) {
//             return true;
//         }
//         if(!adj[node]) {
//             return node === destination;
//         }
//         const ends = adj[node];
//         if(ends) {
//             for(const end of ends) {
//                 if(!visited[end]) {
//                     const newVisited = {...visited, [end]: true}
//                     ret = dfs(end, newVisited, processed);
//                     if(!ret) {
//                         return false;
//                     }
//                 } else {
//                     // If we reach to a cycle, then we return false
//                     return false;
//                 }
//             }
//         } else {
//             return false;
//         }
//         processed.add(node);
//         return true;
//     }
    
//     const visited = {};
//     visited[source] = true;
//     const processed = new Set();
//     return dfs(source, visited, processed);
// };