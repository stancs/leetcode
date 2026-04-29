// Last updated: 4/29/2026, 10:30:03 AM
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    for(let i = 1; i <= s.length / 2; i++) {
        const unit = s.slice(0, i);
        if(s.length % unit.length !== 0) {
            continue;
        }
        const num = s.length / unit.length;
        if(s === unit.repeat(num)) {
            return true;
        }
    }
    return false;
};