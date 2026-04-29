// Last updated: 4/29/2026, 10:29:45 AM
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    if(word.toUpperCase() === word) {
        return true;
    }
    if(word.toLowerCase() === word) {
        return true;
    }
    const newWord = word.slice(0, 1).toUpperCase().concat(word.slice(1).toLowerCase());
    if(newWord === word) {
        return true;
    }
    return false;
};
