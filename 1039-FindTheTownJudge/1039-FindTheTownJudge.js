// Last updated: 4/29/2026, 10:26:14 AM
/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
// 2022-11-10
// 05:00s
// O(n)
// O(n)
var findJudge = function(n, trust) {
    const indegreeArr = new Array(n + 1).fill(0);
    const outdegreeArr = new Array(n + 1).fill(0);
    for(const [u, v] of trust) {
        indegreeArr[v]++;
        outdegreeArr[u]++;
    }
    console.log(outdegreeArr);
    console.log(indegreeArr);
    for(let i = 1; i <= n; i++) {
        if(indegreeArr[i] === n - 1 && outdegreeArr[i] === 0) {
            return i;
        }
    }
    return -1;
};