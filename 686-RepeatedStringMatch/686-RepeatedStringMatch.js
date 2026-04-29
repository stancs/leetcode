// Last updated: 4/29/2026, 10:28:41 AM
/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
// 7:24s
var repeatedStringMatch = function(a, b) {
    if(b.length === 0) {
        return 0;
    }
    let count = 0;
    let repeat = '';
    
    // Append the same string until it grows up to (a+b) string length
    while(repeat.length <= b.length + a.length) {
        repeat = repeat.concat(a);
        count++;
        if(repeat.includes(b)) {
            return count;
        }
    }
    return -1;
};