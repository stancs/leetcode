// Last updated: 4/29/2026, 10:24:39 AM
/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {
    const map = {};
    for(const num of arr) {
        if(map[num] === undefined) {
            map[num] = 1;
        } else {
            map[num]++;
        }
    }
    console.log(map);
    let count = 0;
    const keys = Object.keys(map).map(keyStr => parseInt(keyStr));
    
    for(const key of keys) {
        if(map[key + 1]) {
            count += map[key];
        }
    }
    return count;
};