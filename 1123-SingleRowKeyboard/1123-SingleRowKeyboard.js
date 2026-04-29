// Last updated: 4/29/2026, 10:25:50 AM
/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
// 3:24s
// O(k + w) time | O(k) space
var calculateTime = function(keyboard, word) {
    const hash = {};
    for(let i = 0; i < keyboard.length; i++) {
        hash[keyboard[i]] = i;
    }
    let time = 0;
    let prevIdx = 0;
    for(let i = 0; i < word.length; i++) {
        time += Math.abs(prevIdx - hash[word[i]]);
        prevIdx = hash[word[i]];
    }
    return time;
};