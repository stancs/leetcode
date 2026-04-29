// Last updated: 4/29/2026, 10:22:47 AM
/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    const map = {};
    for(const ch of allowed) {
        if(map[ch] === undefined) {
            map[ch] = true;
        }
    }
    let count = 0;
    let isConsistent;
    for(const word of words) {
        isConsistent = true;
        for(const ch of word) {
            if(map[ch] === undefined) {
                isConsistent = false;
                break;
            }
        }
        if(isConsistent) {
            count++;
        }
    }
    return count;
};