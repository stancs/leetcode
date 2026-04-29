// Last updated: 4/29/2026, 10:33:17 AM
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// 2022-11-11
// 05:08s
// O(n)
// O(n)
var reverseWords = function(s) {
    const s2 = s.join('').split(' ').reverse().join(' ').split('');
    for(let i = 0; i < s.length; i++) {
        s[i] = s2[i];
    }
};