// Last updated: 4/29/2026, 10:22:31 AM
/**
 * @param {string} s
 * @return {number}
 */
// 2022-11-01
// 5:22s
// O(n)
// O(1)
var secondHighest = function(s) {
    const arr = new Array(10).fill(0);
    for(const ch of s) {
        if('0123456789'.includes(ch)) {
            const idx = parseInt(ch);
            arr[idx]++;
        }
    }
    let isFirst = true;
    for(let i = 9; i >= 0; i--) {
        if(arr[i] > 0) {
            if(isFirst) {
                isFirst = false;
            } else {
                return i;
            }
        }
    }
    return -1;
};