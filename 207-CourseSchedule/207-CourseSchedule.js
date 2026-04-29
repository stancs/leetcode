// Last updated: 4/29/2026, 10:32:59 AM
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const adj = {};
    for(const [u, v] of prerequisites) {
        if(adj[v] === undefined) {
            adj[v] = new Set();
        }
        adj[v].add(u);
    }
    
    const checked = new Array(numCourses).fill(false);
    const path = new Array(numCourses).fill(false);
    
    const isCyclic = i => {
        if(checked[i]) {
            return false;
        }
        if(path[i]) {
            return true;
        }
        path[i] = true;
        let ret = false;
        const ends = adj[i];
        if(ends) {
            for(const end of adj[i]) {
                ret = isCyclic(end)
                if(ret) {
                    break;
                }
            }
        }
        path[i] = false;
        checked[i] = true;
        return ret;
    }
    
    for(let i = 0; i < numCourses; i++) {
        if(isCyclic(i)) {
            return false;
        }
    }
    return true;
};