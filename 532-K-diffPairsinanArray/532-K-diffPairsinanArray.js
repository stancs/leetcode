// Last updated: 1/23/2026, 9:29:04 PM
1/**
2 * @param {number[]} nums
3 * @param {number} k
4 * @return {number}
5 */
6var findPairs = function(nums, k) {
7    const sorted = nums.sort((a, b) => a - b);
8    const map = {};
9    for(const num of sorted) {
10        if(map[num] === undefined) {
11            map[num] = 1;
12        } else {
13            map[num]++;
14        }
15    }
16    console.log(map);
17    let count = 0;
18    const hash = {};
19    for(const num of sorted) {
20        const target = num + k;
21        if(map[target] !== undefined && map[target] !== 0) {
22            if(k === 0 && map[target] === 1) {
23                continue;
24            }
25            const str = `${num},${target}`;
26            if(hash[str] === undefined) {
27                hash[str] = true;
28                map[target]--;
29                map[num]--;
30                count++;
31            }
32        }
33    }
34    return count;
35};