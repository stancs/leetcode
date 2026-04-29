// Last updated: 4/29/2026, 10:22:09 AM
/**
 * @param {string} s
 * @return {boolean}
 */
// 2022-11-15
// 3:18s
var areOccurrencesEqual = function(s) {
    const map = {};
    for(const ch of s) {
        if(map[ch] === undefined) {
            map[ch] = 1;
        } else {
            map[ch]++;
        }
    }
    const values = Object.values(map);
    let first;
    for(const value of values) {
        if(first === undefined) {
            first = value;
        } else {
            if(first !== value) {
                return false;
            }
        }
    }
    return true;
};