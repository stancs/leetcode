// Last updated: 4/29/2026, 10:23:42 AM
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    const isVowel = ch => {
        return 'aeiou'.includes(ch);
    };
    let curr = 0;
    for(let i = 0; i < k; i++) {
        if(isVowel(s[i])) {
            curr++;
        }
    }
    let max = curr;
    for(let i = k; i < s.length; i++) {
        if(isVowel(s[i])) {
            curr++;
        }
        if(isVowel(s[i-k])) {
            curr--;
        }
        if(curr > max) {
            max = curr;
        }
    }
    return max;
};