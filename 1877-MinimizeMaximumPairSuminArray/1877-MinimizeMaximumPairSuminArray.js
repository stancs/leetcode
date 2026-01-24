// Last updated: 1/23/2026, 8:22:19 PM
1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var minPairSum = function(nums) {
6    const sorted = nums.sort((a, b) => a - b);
7    console.log(sorted);
8    const arr = [];
9    const len = sorted.length;
10    const mid = len / 2;
11    for(let i = 0; i < len / 2; i++) {
12        const p1 = sorted[mid - 1 - i];
13        const p2 = sorted[mid + i];
14        arr.push(p1 + p2);
15    }
16    console.log(arr);
17    return Math.max(...arr);
18};