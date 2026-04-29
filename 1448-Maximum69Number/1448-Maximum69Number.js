// Last updated: 4/29/2026, 10:24:14 AM
/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    const str = num.toString();
    let newStr = '';
    let isFirst = true;
    for(const ch of str) {
        if(ch === '6' && isFirst) {
            isFirst = false;
            newStr += '9';
        } else {
            newStr += ch;
        }
    }
    return newStr;
};