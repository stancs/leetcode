// Last updated: 4/29/2026, 10:34:57 AM
/**
 * @param {number} n
 * @return {number[]}
 */
// DP
// 25:00s
// O(2^n) time | O(2^n) space
var grayCode = function(n) {
    let output = [0];
    for(let i = 1; i <= n; i++) {
        output = output.concat(output.map(num => num + Math.pow(2, i-1)).reverse());
    }
    return output;
};