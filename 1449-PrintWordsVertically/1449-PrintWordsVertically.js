// Last updated: 4/29/2026, 10:24:13 AM
/**
 * @param {string} s
 * @return {string[]}
 */
// 22:03s
// O(w * l) time | O(w * l) space (w: # of words, l: max length of words)
var printVertically = function(s) {
    const arr = s.split(' ');
    let maxLen = 0;
    for(const word of arr) {
        if(word.length > maxLen) {
            maxLen = word.length;
        }
    }
    const maxRow = maxLen;
    const maxCol = arr.length;
    const matrix = [];
    for(let i = 0; i < maxRow; i++) {
        const row = [];
        for(let j = 0; j < maxCol; j++) {
            row.push(' ');
        }
        matrix.push(row);
    }
    for(let j = 0; j < maxCol; j++) {
        for(let i = 0; i < maxRow; i++) {
            const str = arr[j];
            matrix[i][j] = i < str.length? arr[j][i]: ' ';
        }
    }
    console.log(matrix);
    const output = [];
    for(let i = 0; i < maxRow; i++) {
        const rightTrimmedStr = rightTrim(matrix[i].join(''));
        console.log(`rightTrimmedStr: "${rightTrimmedStr}"`);
        output.push(rightTrimmedStr);
    }
    return output;
};

function rightTrim(str) {
    console.log(`str: "${str}"`);
    const output = '';
    let idx = str.length - 1;
    while(idx >= 0) {
        const char = str[idx];
        if(char === ' ') {
            idx--;
        } else {
            break;
        }
    }
    return str.slice(0, idx + 1);
}