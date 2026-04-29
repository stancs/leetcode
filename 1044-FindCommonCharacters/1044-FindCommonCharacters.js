// Last updated: 4/29/2026, 10:26:13 AM
/**
 * @param {string[]} A
 * @return {string[]}
 */
// 13:58s
// O(n) time | O(c * w) space (c: # of unique characters in A[0], w: number of strings in A)
var commonChars = function(A) {
    const hash = {};
    
    for(let i = 0; i < A.length; i++) {
        if(i === 0) {
            for(let char of A[i]) {
                if(hash[char]) {
                    hash[char][0]++;
                } else {
                    hash[char] = [ 1 ];
                }
            }       
            // console.log(hash);
        } else {
            const keys = Object.keys(hash);
            for(const key of keys) {
                hash[key].push(0);
            }
            for(let char of A[i]) {
                if(hash[char]) {
                    hash[char][i]++;
                }
            }
            // console.log(hash);
        }
    }
    const output = [];
    const keys = Object.keys(hash);
    for(const key of keys) {
        const min = Math.min(...hash[key]);
        for(let i = 0; i < min; i++) {
            output.push(key);
        }
    }
    return output;
};