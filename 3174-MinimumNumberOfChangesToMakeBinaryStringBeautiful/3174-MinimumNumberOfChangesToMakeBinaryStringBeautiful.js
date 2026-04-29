// Last updated: 4/29/2026, 10:19:05 AM
/**
 * @param {string} s
 * @return {number}
 */
var minChanges = function(s) {
    let count = 0;
    for(let i = 0; i < s.length; i = i+2) {
        const ch1 = s[i];
        const ch2 = s[i+1];
        if(ch1 !== ch2) {
            count++;
        }
    }
    return count;
};