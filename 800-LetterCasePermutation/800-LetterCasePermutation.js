// Last updated: 4/29/2026, 10:27:41 AM
/**
 * @param {string} s
 * @return {string[]}
 */
// 2022-11-17
// 53:57s
// O(2^n)
// O(2^n)
var letterCasePermutation = function(s) {
    const smallLetters = 'abcdefghijklmnopqrstuvwxyz';
    const bigLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    const map = {};
    for(let i = 0; i < smallLetters.length; i++) {
        map[smallLetters[i]] = bigLetters[i];
        map[bigLetters[i]] = smallLetters[i];
    }
    
    const ans = [];
    const permutationHelper = str => {
        if(str.length === s.length) {
            ans.push(str);
            return;
        }
        const ch = s[str.length];
        const neighbors = [ch];
        if(map[ch]) {
            neighbors.push(map[ch]);
        }
        for(const newCh of neighbors) {
            const newStr = str + newCh;
            permutationHelper(newStr);
        }
    }
    
    permutationHelper('');
    return ans;
};