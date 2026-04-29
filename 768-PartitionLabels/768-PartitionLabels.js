// Last updated: 4/29/2026, 10:27:59 AM
/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
    let hash = {};
    let count = 0;
    const output = [];
    for(let i = 0; i < S.length; i++) {
        const char = S[i];
        if(hash[char]) {
            hash[char].push(i);
        } else {
            hash[char] = [ i ];
        }
    }
    
    let startIdx = 0, endIdx = -1;
    for(let i = 0; i < S.length; i++) {
        const char = S[i];
        const tmpEndIdx = hash[char][hash[char].length - 1];
        if(endIdx < 0 || tmpEndIdx > endIdx) {
            endIdx = tmpEndIdx;
        }
        if(i === endIdx) {
            output.push(endIdx - startIdx + 1);
            startIdx = i + 1;
            endIdx = -1;
        }
    }
    return output;
};