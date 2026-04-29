// Last updated: 4/29/2026, 10:18:53 AM
/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function(word) {
    const len = word.length;
    if(len === 0) {
        return '';
    } else if(len === 1) {
        return `1${word[0]}`;
    }
    let comp = '';
    let ch = word[0];
    let count = 1;
    for(let i = 1; i < word.length; i++) {
        if(word[i] === ch) {
            if(count === 9) {
                comp += `9${ch}`;
                count = 1;
            } else {
                count++;
            }
        } else {
            comp += `${count}${ch}`;
            ch = word[i];
            count = 1;
        }
    }
    comp += `${count}${ch}`;
    return comp;
};