// Last updated: 4/29/2026, 10:26:03 AM
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */

// O(n^2) time | O(1) space
var twoSumLessThanK = function(A, K) {
    let max = -Infinity;
    let found = false;
    for(let i = 0; i < A.length-1; i++) {
        for(let j = i + 1; j < A.length; j++) {
            const sum = A[i] + A[j];
            if(sum < K) {
                if(!found) {
                    found = true;
                }
                if(max < sum) {
                    max = sum;
                }
            }
        }
    }
    if(found) {
        return max;
    } else {
        return -1;
    }
};