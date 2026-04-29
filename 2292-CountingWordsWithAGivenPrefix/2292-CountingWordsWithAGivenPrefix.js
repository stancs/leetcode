// Last updated: 4/29/2026, 10:21:17 AM
/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
// TC: O(n * max(charaters))
// SC: O(max(characters))
// 2:06 sec
var prefixCount = function(words, pref) {
    let freq = 0;
    const len = pref.length;
    for(const word of words) {
        const prefix = word.slice(0, len);
        if(prefix === pref) {
            freq++;
        }
    }
    return freq;
};