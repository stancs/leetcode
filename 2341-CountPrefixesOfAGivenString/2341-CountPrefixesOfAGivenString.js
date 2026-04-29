// Last updated: 4/29/2026, 10:21:00 AM
/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function(words, s) {
    let count = 0;
    for(let i = 0; i < words.length; i++) {
        const word = words[i];
        if(word.length <= s.length && word === s.slice(0, word.length)) {
           count++;
        }
    }
    return count;
};