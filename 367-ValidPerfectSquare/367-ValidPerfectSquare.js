// Last updated: 4/29/2026, 10:30:50 AM
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let i = 1;
    while(i*i <= num) {
        if(i*i === num) {
            return true;
        } else {
            i++;
        }
    }
    return false;
};