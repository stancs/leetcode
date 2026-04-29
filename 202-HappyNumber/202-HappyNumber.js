// Last updated: 4/29/2026, 10:33:07 AM
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    function getSum(i) {
        let curr = i;
        let sum = 0;
        while(curr !== 0) {
            const remainder = curr % 10;
            sum += remainder * remainder;
            curr = Math.floor(curr / 10);
        }
        return sum;
    }
    let sum = getSum(n);
    console.log(sum);
    const hash = {};
    while(sum !== 1) {
        if(hash[sum] !== undefined) {
            return false;
        }
        hash[sum] = true;
        sum = getSum(sum);
    } 
    return true;
};