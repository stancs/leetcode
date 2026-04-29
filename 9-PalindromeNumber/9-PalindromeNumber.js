// Last updated: 4/29/2026, 10:36:50 AM
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const str = x.toString();
    return str === str.split('').reverse().join('');
};