// Last updated: 4/29/2026, 10:33:25 AM
/**
 * @param {string} s
 * @return {number}
 */
// 7:00s
var titleToNumber = function(s) {
    let sum = 0;
    const charCodeA = 'A'.charCodeAt(0);
    for(let i = 0; i < s.length; i++) {
        sum *= 26;
        sum += s[i].charCodeAt(0) - charCodeA + 1;
    }
    return sum;
};