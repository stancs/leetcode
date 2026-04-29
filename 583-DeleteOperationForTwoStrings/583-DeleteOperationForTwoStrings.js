// Last updated: 4/29/2026, 10:29:14 AM
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const m = word1.length;
    const n = word2.length;
    const memo = new Array(m+1).fill(undefined).map(() => new Array(n+1).fill(undefined));
    console.log(memo);
    const lcs = (i, j) => {
        if(i === 0 || j === 0) {
            return 0;
        }
        if(memo[i][j] !== undefined) {
            return memo[i][j];
        }
        if(word1[i-1] === word2[j-1]) {
            return 1 + lcs(i-1, j-1);
        } else {
            memo[i][j] = Math.max(lcs(i-1, j), lcs(i, j-1));
            return memo[i][j];
        }
    }
    const lcsVal = lcs(m, n);
    return m + n - 2 * lcsVal;
};