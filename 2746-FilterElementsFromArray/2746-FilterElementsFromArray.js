// Last updated: 4/29/2026, 10:19:36 AM
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const output = [];
    for(let i = 0; i < arr.length; i++) {
        if(fn(arr[i], i)) {
            output.push(arr[i]);
        }
    }
    return output;
};