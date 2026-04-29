// Last updated: 4/29/2026, 10:25:34 AM
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let i = 0;
    const n = arr.length;
    while(i < n) {
        if(arr[i] === 0) {
            arr.splice(i, 0, 0);
            arr.pop();
            i++;
        }
        i++;
    }
};