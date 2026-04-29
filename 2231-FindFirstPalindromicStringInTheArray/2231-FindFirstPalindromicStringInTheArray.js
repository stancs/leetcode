// Last updated: 4/29/2026, 10:21:33 AM
/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for(const word of words) {
        if(word.split('').reverse().join('') === word) {
            return word;
        }
    }
    return '';
};