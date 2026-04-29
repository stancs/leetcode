// Last updated: 4/29/2026, 10:28:17 AM
/**
 * @param {string[]} sentence1
 * @param {string[]} sentence2
 * @param {string[][]} similarPairs
 * @return {boolean}
 */
// 2022-12-01
// 36:04s

var areSentencesSimilarTwo = function(sentence1, sentence2, similarPairs) {
    const len1 = sentence1.length;
    const len2 = sentence2.length;
    if(len1 !== len2) {
        return false;
    }
    const map = {};
    for(const [u, v] of similarPairs) {
        console.log(`${u}-${v}`);
        if(!map[u]) {
            map[u] = new Set();
        }
        map[u].add(v);
        if(!map[v]) {
            map[v] = new Set();
        }
        map[v].add(u);
    }
    console.log(map);
    const isSimilar = (start, end, visited) => {
        if(start === end) {
            return true;
        }
        visited.add(start);
        const candidates = map[start];
        if(!candidates) {
            return false;
        }
        if(candidates.has(end)) {
            return true;
        } else {
            for(const node of candidates) {
                if(!visited.has(node) && isSimilar(node, end, visited)) {
                    return true;
                }
            }
        }
        return false;
    }
    for(let i = 0; i < len1; i++) {
        const w1 = sentence1[i];
        const w2 = sentence2[i];
        const visited = new Set();
        if(!isSimilar(w1, w2, visited)) {
            return false;
        }
    }
    return true;
};