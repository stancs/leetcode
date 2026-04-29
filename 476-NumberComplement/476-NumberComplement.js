// Last updated: 4/29/2026, 10:29:57 AM
/**
 * @param {number} num
 * @return {number}
 */
// Time: 15 min
// TC: O(n)
// SC: O(1)
var findComplement = function(num) {
    let i = num;
    let complement = 0;
    let level = 1;
    while(i > 0) {
        const remainder = i % 2;
        if(remainder === 0) {
            complement += level;
        }
        i = (i - remainder) / 2;
        level = level * 2
    }
    return complement;
};