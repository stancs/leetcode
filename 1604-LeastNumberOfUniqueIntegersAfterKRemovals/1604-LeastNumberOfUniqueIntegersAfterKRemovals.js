// Last updated: 4/29/2026, 10:23:30 AM
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
    const hash = {};
    for(const num of arr) {
        if(hash[num] === undefined) {
            hash[num] = 1;
        } else {
            hash[num]++;
        }
    }
    console.log(hash);
    const values = Object.values(hash).sort((a, b) => b - a);
    console.log(values);
    let n = k;
    while(n > 0) {
        const lastValue = values[values.length - 1];
        // if n = 3, [..., 5]
        if(lastValue > n) {
            return values.length;
        } else {
            values.pop();
            n -= lastValue;
        }
    }
    return values.length;
};