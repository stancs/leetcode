// Last updated: 4/29/2026, 10:25:47 AM
/**
 * @param {string} s
 * @return {string}
 */
// 2022-11-07
// 3:52s
var removeDuplicates = function(s) {
    const res = [];
    for(const ch of s) {
        if(res.length > 0 && res[res.length - 1] === ch) {
            res.pop();
        } else {
            res.push(ch);
        }
    }
    return res.join('');
};