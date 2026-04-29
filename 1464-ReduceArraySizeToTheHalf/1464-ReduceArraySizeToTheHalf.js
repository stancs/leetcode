// Last updated: 4/29/2026, 10:24:09 AM
/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
    const map = {};
    for(const num of arr) {
        if(map[num] === undefined) {
            map[num] = 1;
        } else {
            map[num]++;
        }
    }
    const keys = Object.keys(map).sort((a, b) => map[b] - map[a]);
    console.log(keys);
    let sum = 0;
    const half = arr.length / 2.0;
    let count = 0;
    for(const key of keys) {
        if(sum + map[key] >= half) {
            count++;
            return count;
        } else {
            sum += map[key];
            count++;
        }
    }
};