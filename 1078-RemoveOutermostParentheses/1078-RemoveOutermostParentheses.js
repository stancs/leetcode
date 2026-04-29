// Last updated: 4/29/2026, 10:26:07 AM
/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
    const removeIdx = {};
    let level = 0;
    for(let i = 0; i < S.length; i++) {
        const char = S[i];
        if(char === '(') {
            if(level === 0) {
                removeIdx[i] = true;
            }
            level++;
        } else if(char === ')') {
            level--;
            if(level === 0) {
                removeIdx[i] = true;
            }
        } 
    }
    let output = '';
    for(let i = 0; i < S.length; i++) {
        const char = S[i];
        if(removeIdx[i] === undefined) {
            output += char;
        }
    }
    return output;
};