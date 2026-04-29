// Last updated: 4/29/2026, 10:19:58 AM
/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    const digitArr = n.toString().split('').map(ch => parseInt(ch));
    let sum = 0;
    let sign = 1;
    for(let digit of digitArr) {
        sum += sign * digit;
        sign *= -1;
    }
    return sum;
};