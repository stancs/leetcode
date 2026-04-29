// Last updated: 4/29/2026, 10:33:04 AM
/**
 * @param {number} n
 * @return {number}
 */
// O(n^1.5) time | O(1) space
var countPrimes = function(n) {
    let count = 0;
    for(let i = 1; i < n; i++) {
        if(isPrime(i)) {
            count++;
        }
    }
    return count;
};

function isPrime(n) {
    if(n === 1) {
        return false;
    }
    for(let i = 2; i * i <= n; i++) {
        if(n % i === 0) {
            return false;
        }
    }
    return true;
}