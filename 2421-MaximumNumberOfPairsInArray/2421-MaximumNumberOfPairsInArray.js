// Last updated: 4/29/2026, 10:20:39 AM
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 2nd solution
var numberOfPairs = function(nums) {
    const map = {};
    for(const num of nums) {
        if(map[num] === undefined) {
            map[num] = 1;
        } else {
            map[num]++;
        }
    }
    console.log(map);
    const keys = Object.keys(map);
    let answer1 = 0, answer2 = 0;
    for(const key of keys) {
        const val = map[key];
        if(val % 2 === 0) {
            answer1 += val / 2;
        } else {
            answer1 += (val - 1) / 2;
            answer2++;
        }
    }
    return [answer1, answer2];
};