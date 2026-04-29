// Last updated: 4/29/2026, 10:21:24 AM
/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    const digits = [];
    let curr = num;
    while(curr > 0) {
        const digit = curr % 10;
        digits.push(digit);
        curr = Math.floor(curr / 10);
    }
    while(digits.length < 4) {
        digits.unshift(0);
    }
    console.log(digits);
    const sorted = digits.sort((a, b) => a - b);
    const sum1 = sorted[0] * 10 + sorted[2] + sorted[1] * 10 + sorted[3];
    const sum2 = sorted[0] * 100 + sorted[1] * 10 + sorted[2] + sorted[3];
    return Math.min(sum1, sum2);
};