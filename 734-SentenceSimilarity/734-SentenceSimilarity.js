// Last updated: 4/29/2026, 10:28:20 AM
/**
 * @param {string[]} sentence1
 * @param {string[]} sentence2
 * @param {string[][]} similarPairs
 * @return {boolean}
 */
// 2022-12-01
// 23:20s
// O(n)
// O(n)
var areSentencesSimilar = function(sentence1, sentence2, similarPairs) {
    const len1 = sentence1.length;
    const len2 = sentence2.length;
    if(len1 !== len2) {
        return false;
    }
    const map = {};
    for(const [w1, w2] of similarPairs) {
        if(map[w1] === undefined) {
            map[w1] = new Set();
            map[w1].add(w2);
        } else if(!map[w1].has(w2)) {
            map[w1].add(w2);
        }
        if(map[w2] === undefined) {
            map[w2] = new Set();
            map[w2].add(w1);
        } else if(!map[w2].has(w1)) {
            map[w2].add(w1);
        }
    }
    console.log(map);
    for(let i = 0; i < len1; i++) {
        const w1 = sentence1[i];
        const w2 = sentence2[i];
        if(w1 !== w2 && !(map[w1] && map[w1].has(w2))) {
            return false;
        }
    }
    return true;
};