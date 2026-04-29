// Last updated: 4/29/2026, 10:30:38 AM
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const map = {};
    for(const ch of s) {
        if(map[ch] === undefined) {
            map[ch] = 1;
        } else {
            map[ch]++;
        }
    }
    for(let i = 0; i < s.length; i++) {
        const ch = s[i];
        if(map[ch] === 1) {
            return i;
        }    
    }
    return -1;
    
};