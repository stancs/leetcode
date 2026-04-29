// Last updated: 4/29/2026, 10:35:23 AM
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let i = 0;
    while(i * i <= x) {
        i++;
    }
    return i-1;
};