// Last updated: 4/29/2026, 10:26:18 AM
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
// time: 7:32s
// O(max(n1 + n2)) time | O(max(n1 + n2)) space
var addToArrayForm = function(A, K) {
    const kArr = K.toString().split('').map(char => parseInt(char));
    const outputArr = [];
    let carry = 0;
    const len1 = A.length;
    const len2 = kArr.length;
    let idx1 = len1 - 1;
    let idx2 = len2 - 1;
    while(idx1 >= 0 || idx2 >= 0) {
        const digit1 = idx1 >= 0? A[idx1]: 0;
        const digit2 = idx2 >= 0? kArr[idx2]: 0;
        let sum = digit1 + digit2 + carry;
        if(sum > 9) {
            sum -= 10;
            carry = 1;
        } else {
            carry = 0;
        }
        outputArr.unshift(sum);
        idx1--;
        idx2--;
    }
    if(carry === 1) {
        outputArr.unshift(1);
    }
    return outputArr;
};