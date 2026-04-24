// Last updated: 4/24/2026, 1:57:41 AM
1/**
2 * @param {number[]} nums
3 * @return {number[]}
4 */
5var distance = function(nums) {
6    const len = nums.length;
7    const arr = new Array(len).fill(null);
8    const map = {};
9    const map2 = {};
10    for(let i = 0; i < nums.length; i++) {
11        const num = nums[i];
12        if(map[num] === undefined) {
13            map[num] = [i];
14            map2[num] = [0];
15        } else {
16            map[num].push(i);
17            map2[num].push(0);
18        }
19    }
20    console.log(map);
21    for(let i = 0; i < nums.length; i++) {
22        if(arr[i] !== null) {
23            continue;
24        }
25        const num = nums[i];
26        let idxArr = map[num];
27        let sumArr = map2[num];
28        let sum = 0;
29        for(let j = 0; j < idxArr.length; j++) {
30            const idx = idxArr[j];
31            sum += Math.abs(idx - i);
32        }    
33        sumArr[0] = sum;
34        const idx = idxArr[0];
35        arr[idx] = sumArr[0];
36        console.log(`arr[${idx}]=${arr[idx]}`)
37        for(let k = 1; k < idxArr.length; k++) {
38            const diff = idxArr[k] - idxArr[k-1];
39            console.log('diff: ', diff)
40            sumArr[k] = sumArr[k-1] - diff * (idxArr.length - 1 - k) + diff * (k - 1);
41            console.log(`sumArr[${k}]: ${sumArr[k]}`)
42            const idx2 = idxArr[k];
43            arr[idx2] = sumArr[k];
44            console.log(`arr[${idx2}]=${arr[idx2]}`)
45        }
46    }
47    return arr;
48    // 1,2,3,4,5
49    // 10, 7(10-1*3), 6(7 - 1 * 2 + 1), 7(6 - 1*1 + 2), 10(7 + 1*3)
50    // 1, 3, 5, 10, 13
51    // (2+4+9+12) = 27
52    // diff: 2, 27 - 3 * 2 + 2 * 0 = 21, 2 + 2 + 7 + 10 = 21
53    // diff: 2, 21 - 2 * 2 + 2 * 1 = 19, 4+2+5+8 = 19
54
55
56};