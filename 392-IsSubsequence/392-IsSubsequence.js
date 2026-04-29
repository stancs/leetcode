// Last updated: 4/29/2026, 10:30:35 AM
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let sIdx = 0, tIdx = 0;
    while(tIdx < t.length) {
        // console.log(`sIdx: ${sIdx}, tIdx: ${tIdx}`)
        if(sIdx < s.length && s[sIdx] === t[tIdx]) {
            sIdx++;
        } 
        tIdx++;
    }
    return sIdx === s.length;
};