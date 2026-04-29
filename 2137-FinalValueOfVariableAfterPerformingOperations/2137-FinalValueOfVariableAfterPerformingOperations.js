// Last updated: 4/29/2026, 10:21:51 AM
/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let x = 0;
    for(const op of operations) {
        if(op.includes('+')) {
            x++;
        } else {
            x--;
        }
    }
    return x;
};