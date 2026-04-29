// Last updated: 4/29/2026, 10:35:50 AM
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const getKey = str => {
        const map = {};
        for(const ch of str) {
            if(map[ch] === undefined) {
                map[ch] = 1;
            } else {
                map[ch]++;
            }
        }
        // console.log(map);
        // return map;
        const keys = Object.keys(map).sort();
        let res = ''
        for(const key of keys) {
            res += key + map[key];
        }
        return res;
    }
    // console.log(getKey('abc'))
    const strMap = {};
    for(const str of strs) {
        const key = getKey(str);
        if(strMap[key] === undefined) {
            strMap[key] = [str];
        } else {
            strMap[key].push(str);
        }
    }
    const values = Object.values(strMap);
    return values;
};