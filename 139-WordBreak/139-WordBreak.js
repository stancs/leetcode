// Last updated: 4/29/2026, 10:34:04 AM
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const n = s.length;
    const dp = new Array(n+1).fill(false);
    dp[0] = true; // empty string can be included to all strings
    
    for(let i = 1; i <= n; i++) {
        for(let j = 0; j < i; j++) {
            if(dp[j] && wordDict.includes(s.slice(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[n];
};