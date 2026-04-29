// Last updated: 4/29/2026, 10:29:26 AM
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let countAbsent = 0;
    let late3days = false;
    for(let i = 0; i < s.length; i++) {
        const ch = s[i];
        if(ch === 'A') {
            countAbsent++;
        }
        if(i >= 2) {
            if(s[i] === 'L' && s[i-1] === 'L' && s[i-2] === 'L') {
                late3days = true;
            }
        }
    }
    return countAbsent < 2 && !late3days;
};