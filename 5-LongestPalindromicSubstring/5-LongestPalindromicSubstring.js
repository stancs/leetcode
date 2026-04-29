// Last updated: 4/29/2026, 10:36:54 AM
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const n = s.length;
    const dp = new Array(n).fill(false).map(() => new Array(n).fill(false));
    // console.log(dp);
    
    let maxLength = 1;
    let start = 0;
    
    for(let i = 0; i < n; i++) {
        dp[i][i] = true;
    }
    // console.log(dp);
    
    
    for(let i = 0; i < n - 1; i++) {
        if(s[i] === s[i+1]) {
            dp[i][i+1] = true;
            maxLength = 2;
            start = i;
        }
    }
    // console.log(dp);
    
    for(let len = 3; len <= n; len++) {
        for(let i = 0; i < n - len + 1; i++) {
            const j = i + len - 1;
            dp[i][j] = dp[i+1][j-1] && s[i] === s[j];
            if(dp[i][j]) {
                const strLength = j - i + 1;
                if(strLength > maxLength) {
                    maxLength = strLength;
                    start = i;
                }
            }
        }
    }
    // console.log(dp);
    
    // console.log(`start: ${start}, maxLength: ${maxLength}`)
    return s.slice(start, start + maxLength);
};