// Last updated: 4/29/2026, 10:28:48 AM
/**
 * @param {string} s
 * @return {boolean}
 */

/*
// Brute Force
// TC: O(N*3^N)
// SC: O(N)
var checkValidString = function(s) {
    return backtrack(s, 0);
};

function backtrack(str, sum) {
    if(str.length === 0) {
        if(sum === 0) {
            return true;
        } else {
            return false;
        }
    }
    
    if(sum < 0) {
        return false;
    }
    
    const char = str.slice(0, 1);
    const remainStr = str.slice(1);
    
    if(char === '(') {
        return backtrack(remainStr, sum + 1);
    } else if(char === ')') {
        return backtrack(remainStr, sum - 1);
    } else {
        return backtrack(remainStr, sum + 1) || backtrack(remainStr, sum - 1) || backtrack(remainStr, sum);
    }
}
*/

// Greedy
var checkValidString = function(s) {
    let lo = 0, hi = 0;
    for(const ch of s) {
        if(ch === '(') {
            lo++;
        } else {
            lo--;
        }
        
        if(ch !== ')') {
            hi++;
        } else {
            hi--;
        }
        
        if(hi < 0) {
            break;
        }
        lo = Math.max(lo, 0);
    }
    return lo === 0;
};
