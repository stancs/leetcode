// Last updated: 4/29/2026, 10:29:35 AM
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
// 2022-11-11
// 07:54s
// O(n)
// O(1)
var reverseStr = function(s, k) {
    let ans = '';
    let tmpStr = '';
    for(let i = 0; i < s.length; i++) {
        const ch = s[i];
        const remainder = i % (2 * k);
        if(remainder === 0) {
            ans += tmpStr;
            tmpStr = '';
        }
        if(remainder <= k - 1) {
            tmpStr = ch + tmpStr;
        } else {
            tmpStr = tmpStr + ch;
        }
    }
    ans += tmpStr;
    return ans;
};