// Last updated: 4/29/2026, 10:25:35 AM
/**
 * @param {number[]} arr
 * @return {number}
 */
var missingNumber = function(arr) {
    const len = arr.length;
    const first = arr[0];
    const last = arr[len - 1];
    const d = (last - first) / len;
    let tmp = first;
    for(const n of arr) {
        if(n !== tmp) {
            return tmp;
        }
        tmp += d;
    }
    return tmp;
};