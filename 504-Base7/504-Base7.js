// Last updated: 4/29/2026, 10:29:49 AM
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    if(num === 0) {
        return "0";
    }
    const sign = num > 0;
    const absNum = Math.abs(num);
    let output = '';
    let curr = absNum;
    while(curr > 0) {
        const remainder = curr % 7;
        output = remainder.toString() + output;
        curr = Math.floor(curr / 7);
    }
    if(!sign) {
        output = '-' + output;
    }
    return output;
};