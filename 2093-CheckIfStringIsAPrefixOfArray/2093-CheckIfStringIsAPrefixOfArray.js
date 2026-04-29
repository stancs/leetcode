// Last updated: 4/29/2026, 10:22:05 AM
/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function(s, words) {
    let str = '';
    for(let i = 0; i < words.length; i++) {
        str += words[i];
        if(str.length < s.length) {
            continue;
        } else if(str.length === s.length) {
            if(str === s) {
                return true;
            }
        } else {
            return false;
        }
    }
    return false;
};