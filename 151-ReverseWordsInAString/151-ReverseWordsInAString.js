// Last updated: 4/29/2026, 10:33:48 AM
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let trimmed = s.trim();
    const words = trimmed.split(' ').filter(word => word.length > 0);
    console.log(words);
    return words.reverse().join(' ');
};