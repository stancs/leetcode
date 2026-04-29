// Last updated: 4/29/2026, 10:32:32 AM
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n === 0) {
        return false;
    }
    
    let curr = n;
    while(curr % 2 === 0) {
        curr = curr / 2;
    }
    return curr === 1;
};