// Last updated: 4/29/2026, 10:25:06 AM
/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    const map = new Map();
    for(let i = 0; i < brokenLetters.length; i++) {
        const ch = brokenLetters[i];
        if(map.get(ch) === undefined) {
            map.set(ch, true);
        }
    }
    const words = text.split(' ');
    let count = 0;
    let isBroken = false;
    for(const word of words) {
        isBroken = false;
        for(const ch of word) {
            if(map.get(ch)) {
                isBroken = true;
            }
        }
        if(!isBroken) {
            count++;
        }
    }
    return count;
};