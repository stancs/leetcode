// Last updated: 4/29/2026, 10:26:59 AM
/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    const w1 = s1.split(' ');
    const w2 = s2.split(' ');
    const w = [...w1, ...w2];
    const hash = {};
    for(const word of w) {
        if(hash[word] === undefined) {
            hash[word] = 1;
        } else {
            hash[word]++;
        }
    }
    const output = [];
    const keys = Object.keys(hash);
    for(const key of keys) {
        if(hash[key] === 1) {
            output.push(key);
        }
    }
    return output;
};