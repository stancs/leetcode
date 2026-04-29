// Last updated: 4/29/2026, 10:31:00 AM
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = {};
    for(const num of nums) {
        if(map[num] === undefined) {
            map[num] = 1;
        } else {
            map[num]++;
        }
    }
    const freqArr = Object.keys(map).map(key => ({ key, freq: map[key]}) );
    console.log(freqArr);
    freqArr.sort((a, b) => b.freq - a.freq);
    console.log(freqArr);
    const arr = freqArr.map(a => a.key);
    return arr.slice(0, k);
};