// Last updated: 4/29/2026, 10:32:03 AM
/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    if(n === 0) {
        return false;
    }
    let i = n;
    while(i % 2 === 0) {
        i = i / 2;
    }
    while(i % 3 === 0) {
        i = i / 3;
    }
    while(i % 5 === 0) {
        i = i / 5;
    }
    return i === 1;
};