// Last updated: 4/29/2026, 10:31:01 AM
/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    if(num <= 0) {
        return false;
    }
    
    let n = num;
    while(n !== 1) {
        const r = n % 4;
        if(r !== 0) {
            return false;
        }
        n = Math.floor(n / 4);
    }
    return true;
};
