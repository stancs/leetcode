// Last updated: 4/29/2026, 10:23:55 AM
/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    const output = new Set();
    for(let i = 0; i < words.length - 1; i++) {
        for(let j = i+1; j < words.length; j++) {
            const w1 = words[i];
            const w2 = words[j];
            if(w1.includes(w2)) {
                output.add(w2);
            }
            if(w2.includes(w1)) {
                output.add(w1);
            }
        }
    }
    return [...output];
};