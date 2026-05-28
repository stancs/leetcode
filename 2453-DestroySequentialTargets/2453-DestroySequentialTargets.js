// Last updated: 5/27/2026, 11:06:33 PM
1/**
2 * @param {number[]} nums
3 * @param {number} space
4 * @return {number}
5 */
6var destroyTargets = function(nums, space) {
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
17    const canDestroy = (target, seed) => {
18        const remains = (target - seed) % space;
19        return remains === 0;
20    }
21    let maxNum = -Infinity;
22    let min = Infinity;
23    for(let i = 0; i < keys.length; i++) {
24        const seed = Number(keys[i]);
25        let total = map[seed];
26        for(let j = 0; j < keys.length; j++) {
27            if(i !== j) {
28                const target = Number(keys[j]);
29                if(canDestroy(target, seed)) {
30                    total += map[target];
31                }
32            }
33        }
34        if(total > maxNum) {
35            maxNum = total;
36            min = seed;
37        } else if(total === maxNum) {
38            if(seed < min) {
39                min = seed;
40            }
41        }
42        // console.log(`seed: ${seed}, total: ${total}, maxNum: ${maxNum}, min: ${min}`)
43    }
44    return min;
45};
46
47var destroyTargets = function(nums, space) {
48    const map = {};
49    for(const num of nums) {
50        const remains = num % space;
51        if(map[remains] === undefined) {
52            map[remains] = 1;
53        } else {
54            map[remains]++;
55        }
56    }
57    console.log(map);
58    const keys = Object.keys(map);
59    let min = Infinity;
60    let maxDestroy = 0;
61    for(const num of nums) {
62        const remains = num % space;
63        const destroy = map[remains];
64        if(destroy > maxDestroy) {
65            maxDestroy = destroy;
66            min = num;
67        } else if(destroy === maxDestroy) {
68            min = Math.min(min, num);
69        }
70    }
71    return min;
72}