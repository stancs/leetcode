// Last updated: 4/29/2026, 10:23:01 AM
/**
 * @param {string} s
 * @return {number}
 */
// 3:00s
// O(n) time | O(1) space
var maxDepth = function(s) {
    let max = 0;
    let status = 0;
    for(const char of s) {
        if(char === '(') {
            status++;
            if(status > max) {
                max = status;
            }
        } else if(char === ')') {
            status--;
        }
    }
    return max;
};