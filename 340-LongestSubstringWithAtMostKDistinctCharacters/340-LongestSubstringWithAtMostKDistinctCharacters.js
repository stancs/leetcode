// Last updated: 4/29/2026, 10:31:04 AM
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// 1:30:00s
// O(n * d) time | O(n * d) (n: # of characters, d: # of distinct characters)
var lengthOfLongestSubstringKDistinct = function(s, k) {
    if(!s || s.length === 0) {
        return 0;
    }
    
    const maxRow = s.length;
    
    // Apply to all characters
    let maxCharCode = 0
    let minCharCode = Infinity;
    for(let i = 0; i < s.length; i++) {
        const char = s[i];
        const charCode = char.charCodeAt(0);
        if(charCode > maxCharCode) {
            maxCharCode = charCode;
        }
        if(charCode < minCharCode) {
            minCharCode = charCode;
        }
    }
    
    console.log(`minCharCode: ${minCharCode}, maxCharCode: ${maxCharCode}`);
    
    const maxCol = maxCharCode - minCharCode + 1;
    
    const matrix = [];
    
    const baseCharCode = minCharCode;
    
    console.log(`'a' = ${baseCharCode}`);
    
    for(let i = 0; i < s.length; i++) {
        let row;
        if(i === 0) {
            row = [];
            for(let j = 0; j < maxCol; j++) {
                row.push(0);
            }    
        } else {
            row = matrix[i-1].slice();
        }
        const char = s[i];
        const charCode = char.charCodeAt(0);
        const idx = charCode - baseCharCode;
        // console.log(idx);
        row[idx]++;
        
        matrix.push(row);
    }
    // console.log(matrix);
    
    let left = 0, right = 0
    
    let maxLen = 0;
    while(right < s.length) {
        const count = countDistinctChars(left, right, matrix);
        if(count <= k) {
            const currLen = right - left + 1;
            if(currLen > maxLen) {
                maxLen = currLen;
            }
            right++;
        } else {
            if(left === right) {
                right++;
                left++;
            } else {
                left++;
            }
        }
    }
    return maxLen;
};

function countDistinctChars(left, right, matrix) {
    let count = 0;
    const maxCol = matrix[right].length;
    const accuRow = matrix[right];
    const subtractRow = left - 1 >= 0? matrix[left-1]: new Array(maxCol).fill(0);
    
    for(let i = 0; i < maxCol; i++) {
        const freq = accuRow[i] - subtractRow[i];
        if(freq > 0) {
            count++;
        }
    }
    console.log(`left=${left}, right=${right}, count=${count}`);
    
    return count;
}