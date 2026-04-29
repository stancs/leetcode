// Last updated: 4/29/2026, 10:33:40 AM
/**
 * @param {string} s
 * @return {number}
 */
// 15:00s
// O(n) time | O(1) space
var lengthOfLongestSubstringTwoDistinct = function(s) {
    let maxLen = 0;
    for(let i = 0; i < s.length; i++) {
        const hash = {};
        let count = 0;
        for(let j = i; j < s.length; j++) {
            const char = s[j];
            if(!hash[char]) {
                hash[char] = true;
                count++;
            }
            if(count <= 2) {
                const len = j - i + 1;
                if(len > maxLen) {
                    maxLen = len;
                }
            } else {
                break;
            }
        }
    }
    return maxLen;
};