// Last updated: 4/29/2026, 10:36:32 AM
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const len = 2 * n;
    const ans = [];
    const backtrack = (i, str) => {
        if(str.length === len) {
            if(i === 0) {
                ans.push(str);
            }
            return;
        }
        if(i === n) {
            backtrack(n-1, str + ")")
        } else if(i === 0) {
            backtrack(1, str + "(");
        } else {
            backtrack(i+1, str+"(");
            backtrack(i-1, str+")");
        }
    }
    backtrack(0, "");
    return ans;
};