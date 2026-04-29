// Last updated: 4/29/2026, 10:24:32 AM
/**
 * @param {number} n
 * @return {number}
 */
// 3:58s
// O(n) time | O(1) space
var subtractProductAndSum = function(n) {
    const str = n.toString();
    let sum = 0;
    let product = 1;
    for(const digit of str) {
        const num = parseInt(digit);
        sum += num;
        product *= num;
    }
    return product - sum;
};