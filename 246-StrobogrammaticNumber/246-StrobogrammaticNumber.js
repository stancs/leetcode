// Last updated: 4/29/2026, 10:32:19 AM
/**
 * @param {string} num
 * @return {boolean}
 */
// 15:33s
// O(n) time | O(n) space
var isStrobogrammatic = function(num) {
    const hash = {
        0: '0',
        1: '1',
        8: '8',
        6: '9',
        9: '6',
    }
    console.log(hash);
    const str = num.toString();
    const revStrArr = str.split('').reverse();
    const converted = [];
    for(const char of revStrArr) {
        if(hash[char]) {
            converted.push(hash[char]);
        } else {
            return false;
        }
    }
    return converted.join('') === str;
};