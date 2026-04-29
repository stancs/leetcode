// Last updated: 4/29/2026, 10:23:27 AM
/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    const target = [];
    for(let i = 0; i < n; i++) {
        target.push(start + 2*i);
    }
    // console.log(target);
    let output;
    for(const num of target) {
        if(output === undefined) {
            output = num;
        } else {
            output = output ^ num;
        }
    }
    return output;
};