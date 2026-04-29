// Last updated: 4/29/2026, 10:23:46 AM
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
// 2022-12-03
// 11:42s
// O(n)
// O(n)
var checkIfPrerequisite = function(numCourses, prerequisites, queries) {
    const map = {};
    for(const [u, v] of prerequisites) {
        if(map[u] === undefined) {
            map[u] = new Set();
        }
        map[u].add(v);
    }
    console.log(map);
    const ans = [];
    const dfs = (node, end, visited) => {
        if(node === end) {
            return true;
        }
        visited[node] = true;
        const neighbors = map[node] || [];
        for(const neighbor of neighbors) {
            if(!visited[neighbor]) {
                visited[neighbor] = true;
                if(dfs(neighbor, end, visited)) {
                    return true;
                }    
            }
        }
        return false;
    }
    for(const [start, end] of queries) {
        const visited = new Array(numCourses).fill(false);
        const res = dfs(start, end, visited);
        ans.push(res);
    }
    return ans;
};