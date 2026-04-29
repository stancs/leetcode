// Last updated: 4/29/2026, 10:23:16 AM
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
// 2022-12-06
// Looked at the solution
// O(n+e)
// O(1)
var findSmallestSetOfVertices = function(n, edges) {
    
    const indegreeArr = new Array(n).fill(0);
    for(const edge of edges) {
        const [start, end] = edge;
        indegreeArr[end]++;
    }
    console.log(indegreeArr);
    const ans = [];
    for(let i = 0; i < n; i++) {
        if(indegreeArr[i] === 0) {
            ans.push(i);
        }
    }
    return ans;
};