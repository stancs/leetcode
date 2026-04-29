// Last updated: 4/29/2026, 10:26:57 AM
/**
 * @param {number[]} A
 * @return {number[]}
 */
// 1:21s
// O(n) time | O(n) space
var sortArrayByParity = function(A) {
    const evenArr = [];
    const oddArr = [];
    for(const num of A) {
        if(num % 2 === 0) {
            evenArr.push(num);
        } else {
            oddArr.push(num);
        }
    }
    return evenArr.concat(oddArr);
};