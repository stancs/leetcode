// Last updated: 4/29/2026, 10:29:19 AM
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    const list = [];
    const recursive = (remains, curr) => {
        if(remains.length === 0) {
            if(s2.includes(curr)) {
                return true;
            }
        }
        for(let i = 0; i < remains.length; i++) {
            const ch = remains[i];
            const newCurr = curr + ch;
            const newRemains = remains.slice(0, i).concat(remains.slice(i+1));
            if(recursive(newRemains, newCurr)) {
                return true;
            }
        }
        return false;
    }
    return recursive(s1, '');
};

// var checkInclusion = function(s1, s2) {
//     const createMap = str => {
//         const map = {};
//         for(const ch of str) {
//             if(map[ch] === undefined) {
//                 map[ch] = 1;
//             } else {
//                 map[ch]++;
//             }
//         }
//         return map;
//     }
//     const map1 = createMap(s1);
//     const map2 = createMap(s2);
//     console.log(map1);
//     console.log(map2);
    
//     const keys = Object.keys(map1);
//     for(const key of keys) {
//         if(map2[key] === undefined || map1[key] > map2[key]) {
//             return false;
//         }
//     }
//     return true;
// };

var checkInclusion = function(s1, s2) {
    const s1Map = new Map()
    for(const ch of s1) {
        s1Map.set(ch, s1Map.get(ch)+1 || 1);
    }
    let left = 0, count =s1.length;
    for(let right=0;right<s2.length;right++) {
        const ch = s2[right]
        if (s1Map.has(ch)) {
            if (s1Map.get(ch) > 0) {
                count--
            }
            s1Map.set(ch, s1Map.get(ch)-1)
        }
        if (right-left+1 <s1.length) {
            continue
        }
        if (count == 0) {
            return true
        }
        if (s1Map.has(s2[left])) {
            if (s1Map.get(s2[left]) >= 0) {
                count++
            }
            s1Map.set(s2[left], s1Map.get(s2[left])+1)
        }
        left++
    }
    return false
};