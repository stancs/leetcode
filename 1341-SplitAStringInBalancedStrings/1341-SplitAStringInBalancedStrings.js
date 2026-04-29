// Last updated: 4/29/2026, 10:24:56 AM
/**
 * @param {string} s
 * @return {number}
 */
// O(n) time | O(1) space
var balancedStringSplit = function(s) {
    const hash = {
        R: 1,
        L: -1,
    };
    let sum = 0;
    let output = 0;
    for(const char of s) {
        sum += hash[char];
        if(sum === 0) {
            output++;
        }
    }
    return output;
};