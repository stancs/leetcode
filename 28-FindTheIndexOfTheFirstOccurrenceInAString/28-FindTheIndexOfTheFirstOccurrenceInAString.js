// Last updated: 4/29/2026, 10:36:21 AM
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let i = 0;
    let firstCh = needle[0];
    let firstOccurrence = -1;
    while(i < haystack.length) {
        let ch1 = haystack[i];
        if(ch1 === firstCh) {
            const start = i;
            let match = true;
            for(let j = 1; j < needle.length; j++) {
                ch1 = haystack[start + j];
                const ch2 = needle[j];
                if(ch1 !== ch2) {
                    match = false;
                    break;
                }
            }
            if(match) {
                firstOccurrence = start;
                return firstOccurrence;
            }
        }
        i++;
    }
    return firstOccurrence;
};