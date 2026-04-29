// Last updated: 4/29/2026, 10:20:52 AM
/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
    const map = {};
    for(const ch of s) {
        if(map[ch] === undefined) {
            map[ch] = 1;
        } else {
            map[ch]++;
        }
    }
    const freq = map[letter] === undefined? 0: map[letter];
    return Math.floor(freq / s.length * 100)
};