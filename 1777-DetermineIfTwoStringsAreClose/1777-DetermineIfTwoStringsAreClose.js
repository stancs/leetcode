// Last updated: 4/29/2026, 10:22:51 AM
/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    const getMap = str => {
        const map = {};
        for(const ch of str) {
            if(map[ch] === undefined) {
                map[ch] = 1;
            } else {
                map[ch]++;
            }
        }
        return map;
    }
    const map1 = getMap(word1);
    const map2 = getMap(word2);

    console.log(map1);
    console.log(map2);
    const keys1 = Object.keys(map1).sort();
    const keys2 = Object.keys(map2).sort();
    const values1 = Object.values(map1).sort((a, b) => b-a);
    const values2 = Object.values(map2).sort((a, b) => b-a);
    console.log(`keys1: ${keys1}`)
    console.log(`keys2: ${keys2}`)
    console.log(`values1: ${values1}`)
    console.log(`values2: ${values2}`)
    if(keys1.length !== keys2.length || values1.length !== values2.length) {
        return false;
    }
    for(let i = 0; i < keys1.length; i++) {
        if(keys1[i] !== keys2[i]) {
            return false;
        }
    }
    for(let i = 0; i < values1.length; i++) {
        if(values1[i] !== values2[i]) {
            return false;
        }
    }
    return true;
};