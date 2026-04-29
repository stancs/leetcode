// Last updated: 4/29/2026, 10:28:04 AM
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
// O(a+b) time | O(c+d) space (c: unique # of keys in A, d: unique # of keys in B)
var anagramMappings = function(A, B) {
    const hash = {};
    for(let i = 0; i < B.length; i++) {
        if(hash[B[i]]) {
            hash[B[i]].push(i);
        } else {
            hash[B[i]] = [ i ];   
        }
    }
    const output = [];
    for(let i = 0; i < A.length; i++) {
        const arr = hash[A[i]];
        output.push(arr.shift());
    }
    return output;
};