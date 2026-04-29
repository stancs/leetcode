// Last updated: 4/29/2026, 10:23:51 AM
/**
 * @param {string} s
 * @return {number}
 */
// 2022-12-06
// 19:05s
// O(n)
// O(1)
var maxPower = function(s) {
    if(s.length < 2) {
        return s.length;
    }
    let power = 0;
    let len = 1;
    for(let i = 1; i < s.length; i++) {
        if(s[i-1] === s[i]) {
            len++;
        } else {
            len = 1;
        }
        if(len > power) {
            power = len;
        }
    }
    return power;
};