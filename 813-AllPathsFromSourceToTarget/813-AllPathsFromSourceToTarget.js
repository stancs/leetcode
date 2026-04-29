// Last updated: 4/29/2026, 10:27:34 AM
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
// bfs
// 2022-11-13
// 05:00s
// O(n)
// O(1)
var allPathsSourceTarget = function(graph) {
    const n = graph.length;
    const ans = [];
    
    const bfs = path => {
        const last = path[path.length - 1];
        if(last === n - 1) {
            ans.push(path);
            return;
        }
        
        const neighbors = graph[last];
        for(const neighbor of neighbors) {
            bfs(path.concat([neighbor]))
        }
    }
    
    bfs([0]);
    return ans;
};

// 2022-11-13
// 30:00s
// think
// think
var allPathsSourceTarget = function(graph) {
    const n = graph.length;
    const ans = [];
    
    const backtrack = path => {
        // console.log(path);
        const last = path[path.length - 1];
        // console.log(`last: ${last}`);
        if(last === n - 1) {
            ans.push([...path]);
            return;
        }
        
        const neighbors = graph[last];
        // console.log(`neighbors: ${neighbors}`)
        for(const neighbor of neighbors) {
            path.push(neighbor);
            backtrack(path);
            path.pop();
        }
    }
    
    backtrack([0]);
    return ans;
};

