// Last updated: 4/29/2026, 10:32:20 AM
/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
// O(n) time | O(1) space
var shortestWordDistance = function(words, word1, word2) {
    let idx1 = -1;
    let idx2 = -1;
    let min = Number.MAX_VALUE;
    if(word1 === word2) {
        for(let i = 0; i < words.length; i++) {
            const word = words[i];
            if(word === word1) {
                if(idx1 !== -1) {
                    idx2 = idx1;
                }
                idx1 = i;
            }
            if(idx1 !== -1 && idx2 !== -1) {
                const diff = Math.abs(idx1 - idx2);
                if(diff < min) {
                    min = diff;
                }
            }
        }
    } else {
        for(let i = 0; i < words.length; i++) {
            const word = words[i];
            if(word === word1) {
                idx1 = i;
            } else if(word === word2) {
                idx2 = i;
            }
            if(idx1 !== -1 && idx2 !== -1) {
                const diff = Math.abs(idx1 - idx2);
                if(diff < min) {
                    min = diff;
                }
            }
        }    
    }
    
    return min;
};