// Last updated: 4/29/2026, 10:20:11 AM
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function(s, t) {
    let tIdx = 0;
    for(const ch of s) {
        if(ch === t[tIdx]) {
            tIdx++;
        }
    }
    console.log(`idx: ${tIdx} of ${t.length}`)
    return t.length - tIdx;
};