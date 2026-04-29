// Last updated: 4/29/2026, 10:30:36 AM
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const hash = {};
    for(const char of s) {
        if(!hash[char]) {
            hash[char] = 1;
        } else {
            hash[char]++;
        }
    }
    for(const char of t) {
        if(hash[char] === undefined || hash[char] === 0) {
            return char;
        } else {
            hash[char]--;
        }
    }
};