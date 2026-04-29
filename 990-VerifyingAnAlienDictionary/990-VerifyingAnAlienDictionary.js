// Last updated: 4/29/2026, 10:26:37 AM
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
// 30:00s
var isAlienSorted = function(words, order) {
    const orderHash = {};
    for(let i = 0; i < order.length; i++) {
        const char = order[i];
        orderHash[char] = i;
    }
    
    function compare(str1, str2) {
        const len1 = str1.length;
        const len2 = str2.length;
        const minLen = Math.min(len1, len2);
        if(minLen === 0) {
            return len1 - len2;
        }
        for(let i = 0; i < minLen; i++) {
            const char1 = str1[i];
            const char2 = str2[i];
            if(orderHash[char1] < orderHash[char2]) {
                return -1;
            } else if(orderHash[char1] > orderHash[char2]) {
                return 1;
            } else {
                if(i === minLen - 1) {
                    return len1 - len2;
                }
            }
        }
    }
    
    const clone = [...words];
    words.sort(compare);
    for(let i = 0; i < words.length; i++) {
        if(clone[i] !== words[i]) {
            return false;
        }
    }
    return true;
};