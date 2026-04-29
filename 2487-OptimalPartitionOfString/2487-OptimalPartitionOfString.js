// Last updated: 4/29/2026, 10:20:24 AM
/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
    let count = 1;
    let hash = {};
    for(const ch of s) {
        if(hash[ch]) {
            count++;
            hash = {};
        }
        hash[ch] = true;
    }
    return count;
};