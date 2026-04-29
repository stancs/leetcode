// Last updated: 4/29/2026, 10:27:22 AM
/**
 * @param {string} s
 * @return {number[][]}
 */
// 2022-12-01
// 47:27s
// O(n)
// O(1)
var largeGroupPositions = function(s) {
    const ans = [];
    let start = 0, end = 0;
    for(let i = 1; i < s.length; i++) {
        if(s[start] !== s[i]) {
            end = i - 1;
            if(end - start >= 2) {
                ans.push([start, end]);
            }
            start = i;
        }
    }
    // boundary condition
    if(s[start] === s[s.length - 1] && (s.length - 1 - start) >= 2) {
        ans.push([start, s.length - 1]);
    }
    return ans;
};