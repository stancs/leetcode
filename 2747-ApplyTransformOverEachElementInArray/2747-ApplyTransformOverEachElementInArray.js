// Last updated: 4/29/2026, 10:19:34 AM
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const list = [];
    for(let i = 0; i < arr.length; i++) {
        const res = fn(arr[i], i);
        list.push(res);
    }
    return list;
};