// Last updated: 4/29/2026, 10:32:07 AM
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if(num < 10) {
        return num;
    }
    
    let sum = 0;
    let tmp = num;
    while(tmp !== 0) {
        const remainder = tmp % 10;
        sum += remainder;
        tmp = Math.floor(tmp / 10);
    }
    return addDigits(sum);
};