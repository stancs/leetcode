// Last updated: 4/29/2026, 10:31:16 AM
/**
 * @param {number} n
 * @return {boolean}
 */
// 3:48s
// O(log(n)) time | O(1) space
var isPowerOfThree = function(n) {
    if(n < 1) {
        return false;
    }
    let i = 1;
    while(i <= n) {
        if(i === n) {
            return true;
        } else {
            i *= 3;
        }
    }
    return false;
};