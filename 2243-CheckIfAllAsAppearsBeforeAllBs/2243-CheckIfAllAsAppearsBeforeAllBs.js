// Last updated: 4/29/2026, 10:21:31 AM
/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
    let mode = 0;
    for(const ch of s) {
        if(mode === 0) {
            if(ch === 'a') {
                mode = 1;
            } else if(ch === 'b') {
                mode = 2;
            }
        } else if(mode === 1) {
            if(ch === 'b') {
                mode = 2;
            }
        } else if(mode === 2) {
            if(ch === 'a') {
                return false;
            }
        }
    }
    return true;
};