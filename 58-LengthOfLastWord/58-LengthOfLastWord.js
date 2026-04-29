// Last updated: 4/29/2026, 10:35:39 AM
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const words = s.trim().split(' ');
    const lastWord = words[words.length - 1];
    const len = lastWord.length;
    return len;
};