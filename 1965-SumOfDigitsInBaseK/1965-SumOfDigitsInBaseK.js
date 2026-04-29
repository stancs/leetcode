// Last updated: 4/29/2026, 10:22:26 AM
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function(n, k) {
    let sum = 0;
    let curr = n;
    let quotient;
    while(curr !== 0) {
        const remainder = curr % k;
        sum += remainder;
        quotient = (curr - remainder) / k;
        curr = quotient;
        console.log(`remainder: ${remainder}, sum=${sum}`)
    }
    return sum;
};