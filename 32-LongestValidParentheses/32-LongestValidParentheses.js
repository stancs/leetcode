// Last updated: 4/29/2026, 10:36:15 AM
/**
 * @param {string} s
 * @return {number}
 */

// var longestValidParentheses = function(s) {
    
// }


// O(n) time | O(n) space
var longestValidParentheses = function(s) {
    const stack = [ -1 ];
    let maxLen = 0;
    for(let i = 0; i < s.length; i++) {
        const ch = s[i];
        if(ch === '(') {
            stack.push(i);
        } else {
            stack.pop();
            if(stack.length > 0) {
                const topIdx = stack[stack.length - 1];
                const len = i - topIdx;
                if(len > maxLen) {
                    maxLen = len;
                }    
            } else {
                stack.push(i);
            }
        }
    }
    return maxLen;
};
