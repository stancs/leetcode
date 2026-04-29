// Last updated: 4/29/2026, 10:25:11 AM
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    const m = text1.length;
    const n = text2.length;
    const memo = new Array(m).fill(null).map(() => new Array(n));
    const dp = (i, j) => {
        if(i === m || j === n) {
            return 0;
        }
        if(memo[i][j] !== undefined) {
            return memo[i][j];
        }
        if(text1[i] === text2[j]) {
            memo[i][j] = 1 + dp(i+1, j+1);
        } else {
            memo[i][j] = Math.max(dp(i+1, j), dp(i, j+1));
        }
        return memo[i][j];
    }
    return dp(0, 0);
};