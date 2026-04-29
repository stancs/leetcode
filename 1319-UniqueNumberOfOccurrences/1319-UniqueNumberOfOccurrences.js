// Last updated: 4/29/2026, 10:24:59 AM
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const map = {};
    for(const num of arr) {
        if(map[num] === undefined) {
            map[num] = 1;
        } else {
            map[num]++;
        }
    }
    console.log(map)
    const values = Object.values(map);
    const map2 = {};
    for(const val of values) {
        if(map2[val] === undefined) {
            map2[val] = true;
        } else {
            return false;
        }
    }
    return true;
};