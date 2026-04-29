// Last updated: 4/29/2026, 10:23:43 AM
/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
    const words = sentence.split(' ');
    const len = searchWord.length;
    
    for(let i = 0; i < words.length; i++) {
        const word = words[i];
        if(word.length >= len) {
            if(word.slice(0, len) === searchWord) {
                return i+1;
            }
        }
    }
    return -1;
};