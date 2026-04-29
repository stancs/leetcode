// Last updated: 4/29/2026, 10:20:38 AM
/**
 * @param {string} s
 * @return {character}
 */
// T: 1:45s
// TC: O(n)
// SC: O(n)
var repeatedCharacter = function(s) {
    const map = {};
    for(const ch of s) {
        if(map[ch] === undefined) {
            map[ch] = 1;
        } else if(map[ch] === 1) {
            return ch;
        }
    }
};