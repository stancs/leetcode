// Last updated: 4/29/2026, 10:30:42 AM
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const hash = {};
    for(const ch of magazine) {
        if(hash[ch] === undefined) {
            hash[ch] = 1;
        } else {
            hash[ch]++;   
        }
    }
    for(const ch of ransomNote) {
        if(!hash[ch]) {
            return false;
        } else {
            hash[ch]--;
        }
    }
    return true;
};