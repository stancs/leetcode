// Last updated: 4/29/2026, 10:29:42 AM
/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
// 40:36s
// O(w * l) time | O(l) space
var findLongestWord = function(s, d) {
    let output = '';
    for(const word of d) {
        if(word.length > output.length || (word.length === output.length && word < output)) {
            console.log(`word=${word}, s=${s}, isIncluded=${isIncluded(word, s)}`);
            if(isIncluded(word, s)) {
                output = word;
            }    
        }
    }
    return output;
};

function isIncluded(word, s) {
    let wordIdx = 0;
    let sIdx = 0;
    while(wordIdx < word.length && sIdx < s.length) {
        if(word[wordIdx] === s[sIdx]) {
            wordIdx++;
        } 
        sIdx++;
    }
    return wordIdx === word.length;
}