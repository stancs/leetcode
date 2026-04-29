// Last updated: 4/29/2026, 10:32:51 AM
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const inDegree = new Array(numCourses).fill(0);
    const map = {};
    for(const [u, v] of prerequisites) {
        if(map[v] === undefined) {
            map[v] = [];
        } 
        map[v].push(u);
        inDegree[u]++;
    }
    console.log(map);
    console.log(inDegree);
    
    const queue = [];
    for(let i = 0; i < numCourses; i++) {
        if(inDegree[i] === 0) {
            queue.push(i);
        }
    }
    console.log(`queue: ${queue}`);
    
    const result = [];
    while(queue.length !== 0) {
        const curr = queue.shift();
        result.push(curr);
        
        const nextList = map[curr];
        if(nextList) {
            for(const next of nextList) {
                inDegree[next]--;
                if(inDegree[next] === 0) {
                    queue.push(next);
                }
            }
        }
    }
    return result.length === numCourses? result: [];
};