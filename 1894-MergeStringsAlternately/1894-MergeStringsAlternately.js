// Last updated: 4/29/2026, 10:22:32 AM
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let idx1 = 0, idx2 = 0;
    const arr = [];
    while(idx1 < word1.length || idx2 < word2.length) {
        if(idx1 < word1.length) {
            arr.push(word1[idx1]);
            idx1++;
        }
        if(idx2 < word2.length) {
            arr.push(word2[idx2]);
            idx2++;
        }
    }
    return arr.join('');
};