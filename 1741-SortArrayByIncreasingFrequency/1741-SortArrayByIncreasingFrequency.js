// Last updated: 4/29/2026, 10:23:00 AM
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 2022-12-11
// 06:17s
// O(n)
// O(n)
var frequencySort = function(nums) {
    const map = {};
    for(const num of nums) {
        if(map[num] === undefined) {
            map[num] = 1;
        } else {
            map[num]++;
        }
    }
    console.log(map);
    const arr = nums.map(num => ({ num, freq: map[num]}));
    console.log(arr);
    const arr2 = arr.sort((a, b) => {
        if(a.freq !== b.freq) {
            return a.freq - b.freq;
        } else {
            return b.num - a.num;
        }
    })
    console.log(arr2);
    return arr2.map(item => item.num);
};