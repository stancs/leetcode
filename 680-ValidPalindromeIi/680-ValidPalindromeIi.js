// Last updated: 4/29/2026, 10:28:46 AM
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;
    // check left char & right char
    // if they are the same, move to the center
    // if they are not the same, check two cases (skip left side or skip right side)
    const compare = (i1, i2, remain) => {
        if(i1 >= i2) {
            return true;
        }
        if(s[i1] === s[i2]) {
            return compare(i1 + 1, i2 - 1, remain);
        } else {
            if(remain > 0) {
                return compare(i1 + 1, i2, 0) || compare(i1, i2 - 1, 0);
            } else {
                return false;
            }
        }
    }

    return compare(left, right, 1);
};