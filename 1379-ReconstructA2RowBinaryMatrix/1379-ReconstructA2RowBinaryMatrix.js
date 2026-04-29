// Last updated: 4/29/2026, 10:24:44 AM
/**
 * @param {number} upper
 * @param {number} lower
 * @param {number[]} colsum
 * @return {number[][]}
 */
var reconstructMatrix = function(upper, lower, colsum) {
    const n = colsum.length;
    const mat = Array.from({length: 2}, () => Array(n).fill(0));
    for(let i = 0; i < n; i++) {
        if(colsum[i] === 2) {
            if(upper > 0 && lower > 0) {
                mat[0][i] = 1;
                mat[1][i] = 1;
                upper -= 1;
                lower -= 1;
                colsum[i] -= 2;
            } else {
                return [];
            }
            
        } else if(colsum[i] === 1) {
            if(upper > lower && upper > 0) {
                mat[0][i] = 1;
                upper -= 1;
                colsum[i] -= 1;
            } else if(lower > 0) {
                mat[1][i] = 1;
                lower -= 1;
                colsum[i] -= 1;
            } else {
                return [];
            }
        }
        // don't need to do sometning for colsum[i] === 0 case
        
    }
    console.log(`upper: ${upper}`)
    console.log(`lower: ${lower}`)
    console.log(`colsum: ${colsum}`)
    if(lower === 0 && upper === 0 && colsum.every(val => val === 0)) {
        return mat
    }
    return [];
};