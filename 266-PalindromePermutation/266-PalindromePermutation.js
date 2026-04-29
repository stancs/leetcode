// Last updated: 4/29/2026, 10:32:02 AM
/**
 * @param {string} s
 * @return {boolean}
 */
// 15:00s
var canPermutePalindrome = function(s) {
    const hash = {};
    let count = 0;
    
    for(const char of s) {
        if(hash[char] !== undefined) {
            hash[char]++;
        } else {
            hash[char] = 1;
        }
        count++;
    }
    
    const values = Object.values(hash);
    if(count % 2 === 0) {
        for(const val of values) {
            if(val % 2 === 1) {
                return false;
            }
        }
    } else {
        let oddCount = 0;
        for(const val of values) {
            if(val % 2 === 1) {
                if(oddCount > 0) {
                    return false;
                } else {
                    oddCount++;
                }
            }
        }
    }
    return true;
};