// Last updated: 5/11/2026, 12:25:33 PM
1/**
2 * @param {number[]} nums1
3 * @param {number[]} nums2
4 * @param {number} k
5 * @return {number}
6 */
7var numberOfPairs = function(nums1, nums2, k) {
8    const n = nums1.length;
9    const m = nums2.length;
10    let count = 0;
11    for(let i = 0; i < n; i++) {
12        for(let j = 0; j < m; j++) {
13            const i1 = nums1[i];
14            const i2 = nums2[j];
15            if(i1 % (i2 * k) === 0) {
16                count++;
17            }
18        }
19    }
20    return count;
21};