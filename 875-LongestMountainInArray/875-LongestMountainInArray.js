// Last updated: 4/29/2026, 10:27:15 AM
/**
 * @param {number[]} A
 * @return {number}
 */
// 34:00s
// O(n) time | O(1) space
var longestMountain = function(A) {
    let status = 0;
    let len = 1;
    let maxLen = 0;
    for(let i = 0; i < A.length - 1; i++) {
        const p1 = A[i];
        const p2 = A[i+1];
        if(p1 < p2) {
            if(status === 2) {
                len = 1;
            }
            status = 1;
            len++;
        } else if(p1 > p2 && status >= 1) {
            status = 2;
            len++;
            if(len > maxLen) {
                maxLen = len;
            }
        } else {
            status = 0;
            len = 1;
        }
    }
    return maxLen;
};