// Last updated: 4/29/2026, 10:22:57 AM
/**
 * @param {number} n
 * @return {number}
 */
// 5:00s
// O(n) time | O(n) space
var getMaximumGenerated = function(n) {
    if(n <= 1) {
        return n;
    }
    const arr = new Array(n+1);
    arr[0] = 0;
    arr[1] = 1;
    let max = -Infinity;
    for(let idx = 2; idx <= n; idx++) {
        if(idx % 2 === 0) {
            const i = idx / 2;
            arr[idx] = arr[i];
        } else {
            const i = (idx - 1) / 2;
            arr[idx] = arr[i] + arr[i+1];
        }
        if(arr[idx] > max) {
            max = arr[idx];
        }
    }
    console.log(arr);
    return max;
};