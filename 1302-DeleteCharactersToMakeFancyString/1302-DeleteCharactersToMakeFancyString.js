// Last updated: 4/29/2026, 10:25:00 AM
/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    let ch = s[0];
    let count = 1;
    let deleteCount = 0;
    let res = s[0];
    for(let i = 1; i < s.length; i++) {
        if(s[i] === ch) {
            if(count <= 1) {
                res += s[i];
                count++;
            }
        } else {
            res += s[i];
            ch = s[i];
            count = 1;
        }
    }
    return res;
};