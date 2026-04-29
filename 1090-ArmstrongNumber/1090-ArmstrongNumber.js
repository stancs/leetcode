// Last updated: 4/29/2026, 10:25:59 AM
/**
 * @param {number} N
 * @return {boolean}
 */
// 3:41s
// O(d) time | O(d) space (d: # of digits in N)
var isArmstrong = function(N) {
    const str = N.toString();
    const k = str.length;
    let sum = 0;
    for(const digit of str) {
        const digitNum = parseInt(digit);
        sum += Math.pow(digitNum, k);
    }
    return sum === N;
};