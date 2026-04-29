// Last updated: 4/29/2026, 10:32:24 AM
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const map1 = new Map();
    const map2 = new Map();
    for(const ch of s) {
        const val = map1.get(ch);
        if(val === undefined) {
            map1.set(ch, 1);
        } else {
            map1.set(ch, val + 1);
        }
    }
    for(const ch of t) {
        const val = map2.get(ch);
        if(val === undefined) {
            map2.set(ch, 1);
        } else {
            map2.set(ch, val + 1);
        }
    }
    console.log(map1)
    console.log(map2)
    const keys1 = [...map1.keys()];
    const keys2 = [...map2.keys()];
    if(keys1.length !== keys2.length) {
        return false;
    }
    for(const key of keys1) {
        if(map1.get(key) !== map2.get(key)) {
            return false;
        }
    }
    return true;
};