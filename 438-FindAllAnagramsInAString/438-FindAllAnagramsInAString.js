// Last updated: 4/29/2026, 10:30:15 AM
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
// 33:07s
// O(n) time | O(1) space
var findAnagrams = function(s, p) {
    const windowSize = p.length;
    const anagramHash = {};
    for(let i = 0; i < p.length; i++) {
        const char = p[i];
        if(anagramHash[char]) {
            anagramHash[char]++;
        } else {
            anagramHash[char] = 1;
        }
    }
    console.log(`anagramHash=`);
    console.log(anagramHash);
    const output = [];
    const countHash = {};
    
    for(let i = 0; i < s.length; i++) {
        const char = s[i];
        if(countHash[char]) {
            countHash[char]++;
        } else {
            countHash[char] = 1;
        }
        
        if(i >= windowSize) {
            const removeChar = s[i - windowSize];
            if(countHash[removeChar] > 1) {
                countHash[removeChar]--;
            } else {
                delete countHash[removeChar];
            }
        }
        
        if(i >= windowSize - 1) {
            if(compare(anagramHash, countHash)) {
                output.push(i - windowSize + 1);
            }
        }
        console.log(`i = ${i}`);
        console.log(countHash);
    }
    return output;
};

function compare(anagramHash, countHash) {
    const keys1 = Object.keys(anagramHash);
    const keys2 = Object.keys(countHash);
    
    if(keys1.length !== keys2.length) {
        return false;
    }
    for(const key of keys1) {
        if(anagramHash[key] !== countHash[key]) {
            return false;
        }
    }
    return true;
}