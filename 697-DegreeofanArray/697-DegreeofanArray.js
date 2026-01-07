// Last updated: 1/6/2026, 7:36:30 PM
1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var findShortestSubArray = function (nums) {
6    const map1 = {}, map2 = {};
7    for (let i = 0; i < nums.length; i++) {
8        const num = nums[i];
9        if (map1[num] === undefined) {
10            map1[num] = 1;
11            map2[num] = [i];
12        } else {
13            map1[num]++;
14            map2[num].push(i);
15        }
16    }
17    console.log(map1);
18    console.log(map2);
19    const values = Object.values(map1);
20    const degree = Math.max(...values);
21    console.log('degree:', degree)
22    const keys = Object.keys(map1);
23    let min = Infinity;
24    for (const key of keys) {
25        if (map1[key] === degree) {
26            const arr = map2[key];
27            const idx1 = arr[0];
28            const idx2 = arr[arr.length - 1];
29            const len = idx2 - idx1 + 1;
30            min = Math.min(len, min);
31        }
32    }
33    return min;
34};