// Last updated: 1/6/2026, 7:35:51 PM
1/**
2 * @param {number[]} nums
3 * @return {number[]}
4 */
5// 2nd solution
6var numberOfPairs = function(nums) {
7    const map = {};
8    for(const num of nums) {
9        if(map[num] === undefined) {
10            map[num] = 1;
11        } else {
12            map[num]++;
13        }
14    }
15    console.log(map);
16    const keys = Object.keys(map);
17    let answer1 = 0, answer2 = 0;
18    for(const key of keys) {
19        const val = map[key];
20        if(val % 2 === 0) {
21            answer1 += val / 2;
22        } else {
23            answer1 += (val - 1) / 2;
24            answer2++;
25        }
26    }
27    return [answer1, answer2];
28};