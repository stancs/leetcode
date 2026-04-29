// Last updated: 4/29/2026, 10:27:30 AM
/**
 * @param {string[]} words
 * @return {number}
 */
// O(n) time (n: # of words) | O(d) space (d: max # of unique words)
var uniqueMorseRepresentations = function(words) {
    const start = 'a'.charCodeAt(0);
    const morseHash = {};
    const table = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    for(let i = 0; i < table.length; i++) {
        const char = String.fromCharCode(start + i);
        morseHash[char] = table[i];
    }
    // console.log(morseHash);
    const uniqueHash = {};
    for(const word of words) {
        let morse = '';
        for(const char of word) {
            morse = morse + morseHash[char];
        }
        if(!uniqueHash[morse]) {
            uniqueHash[morse] = true;
        }
    }
    return Object.keys(uniqueHash).length;
};