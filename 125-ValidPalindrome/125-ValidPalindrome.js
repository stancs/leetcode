// Last updated: 4/29/2026, 10:34:19 AM
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const s2 = s.toLowerCase();
    console.log(s2);
    const alpha = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const s3 = s2.split('').filter(c => alpha.includes(c)).join('')
    console.log(s3);
    const isPalindrome = s3.split('').reverse().join('') === s3;
    return isPalindrome;
};