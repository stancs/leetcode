// Last updated: 4/29/2026, 10:34:56 AM
/**
 * @param {string} s
 * @return {number}
 */

// Iterative DP
// 40:00s
// O(n) time | O(n) space
var numDecodings = function(s) {
    const map = {};
    const base = 'A'.charCodeAt(0);
    for(let i = 0; i < 26; i++) {
        const char = String.fromCharCode(base + i);
        map[i + 1] = char;
    }
    // console.log(map);
    const dp = new Array(s.length + 1).fill(0);
    dp[0] = 1;
    // dp[i] = dp[i-1] + dp[i-2];
    // dp[i] = # of ways for string from index 0 to i+1
    for(let i = 1; i <= s.length; i++) {
        const oneLetter = s.slice(i-1, i);
        if(map[oneLetter]) {
            dp[i] += dp[i-1];
        }
        if(i >= 2) {
            const twoLetters = s.slice(i-2, i);
            if(map[twoLetters]) {
                dp[i] += dp[i-2];   
            }    
        }
        
    }
    return dp[s.length];
};



/*
// Recursive memoization
// 54:00s
// O(n) time | O(n) space
var numDecodings = function(s) {
    const map = {};
    const base = 'A'.charCodeAt(0);
    for(let i = 0; i < 26; i++) {
        const char = String.fromCharCode(base + i);
        map[i + 1] = char;
    }
    // console.log(map);
    const output = [];
    const memo = {};
    const count = numDecodingsHelper(0, s, map, memo);
    return count;
};

function numDecodingsHelper(idx, s, map, memo) {
    if(idx === s.length) {
        return 1;
    }
    if(memo[idx] !== undefined) {
        return memo[idx];
    }
    let sum = 0;
    const maxIteration = Math.min(s.length - idx, 2);
    for(let i = 1; i <= maxIteration; i++) {
        const num = s.slice(idx, idx + i);
        const letter = map[num];
        if(letter) {
            memo[idx + i] = numDecodingsHelper(idx + i, s, map, memo);
            sum += memo[idx + i];
        }
    }
    return sum;
}
*/


/*
var numDecodings = function(s) {
    const map = {};
    const base = 'A'.charCodeAt(0);
    for(let i = 0; i < 26; i++) {
        const char = String.fromCharCode(base + i);
        map[i + 1] = char;
    }
    // console.log(map);
    const output = [];
    const memo = {};
    numDecodingsHelper('', s, map, memo, output);
    console.log(output);
    return output.length;
};

function numDecodingsHelper(currStr, remainStr, map, memo, output) {
    if(remainStr.length === 0) {
        if(!hash[currStr]) {
            // console.log(currStr);
            output.push(currStr);    
        } 
        return;
    }
    const maxIteration = Math.min(remainStr.length, 2);
    for(let i = 1; i <= maxIteration; i++) {
        const num = remainStr.slice(0, i);
        const letter = map[num];
        if(letter) {
            const newCurrStr = currStr + letter;
            const newRemainStr = remainStr.slice(i);
            numDecodingsHelper(newCurrStr, newRemainStr, map, hash, output);    
        }
        
    }
}
*/