// Last updated: 4/29/2026, 10:24:03 AM
/**
 * @param {number} n
 * @return {string}
 */
// 2:00s 
// O(n) time | O(n) space
var generateTheString = function(n) {
    let output = '';
    if(n % 2 === 0) {
        for(let i = 1; i < n; i++) {
            output += 'p';
        }
        output += 'z';
    } else {
        for(let i = 1; i <= n; i++) {
            output += 'p';
        }
    }
    return output;
};