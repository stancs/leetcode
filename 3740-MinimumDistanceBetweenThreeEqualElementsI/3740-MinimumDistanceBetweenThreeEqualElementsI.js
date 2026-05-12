// Last updated: 5/11/2026, 9:25:07 PM
1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var minimumDistance = function(nums) {
6    const map = {};
7    for(let i = 0; i < nums.length; i++) {
8        const num = nums[i];
9        if(map[num] === undefined) {
10            map[num] = { freq: 1, arr: [i]}
11        } else {
12            map[num].freq++;
13            map[num].arr.push(i);
14        }
15    }
16    // console.log(map);
17    function dist3pts(p, q, r) {
18        const dist = Math.abs(p - q) + Math.abs(q - r) + Math.abs(r - p);
19        return dist;
20    }
21    const keys = Object.keys(map);
22    let min = Number.MAX_SAFE_INTEGER;
23    for(const key of keys) {
24        const obj = map[key];
25        if(obj.freq >= 3) {
26            for(let i = 0; i < obj.arr.length - 2; i++) {
27                const p = obj.arr[i];
28                const q = obj.arr[i+1];
29                const r = obj.arr[i+2];
30                const dist = dist3pts(p, q, r);
31                if(min > dist) {
32                    min = dist;
33                }
34            }
35        }
36    }
37    return min === Number.MAX_SAFE_INTEGER? -1: min;
38};