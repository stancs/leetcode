// Last updated: 5/13/2026, 12:12:18 AM
1/**
2 * @param {number[][]} nums1
3 * @param {number[][]} nums2
4 * @return {number[][]}
5 */
6var mergeArrays = function(nums1, nums2) {
7    const m = nums1.length;
8    const n = nums2.length;
9    let i = 0, j = 0;
10    const res = [];
11    const map = {};
12    for(const [id1, val1] of nums1) {
13        if(map[id1] === undefined) {
14            map[id1] = val1;
15        } else {
16            map[id1] += val1;
17        }
18    }
19    for(const [id2, val2] of nums2) {
20        if(map[id2] === undefined) {
21            map[id2] = val2;
22        } else {
23            map[id2] += val2;
24        }
25    }
26    const keys = Object.keys(map).map(str => Number(str));
27    keys.sort((a, b) => a - b);
28    for(const key of keys) {
29        const val = map[key];
30        res.push([key, val]);
31    }
32    return res;
33};