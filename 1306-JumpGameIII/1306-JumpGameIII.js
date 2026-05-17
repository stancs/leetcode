// Last updated: 5/16/2026, 11:42:01 PM
1/**
2 * @param {number[]} arr
3 * @param {number} start
4 * @return {boolean}
5 */
6var canReach = function(arr, start) {
7    const len = arr.length;
8    const seen = new Array(arr.length).fill(0);
9    const res = { reached: false }
10    const dft = (i) => {
11        // console.log(`i: ${i}, seen: ${seen}`)
12        if(res.reached || seen[i] === 1) {
13            // console.log('return')
14            return;
15        }
16        if(arr[i] === 0) {
17            res.reached = true;
18            // console.log('reached idx 0')
19            return;
20        }
21        seen[i] = 1;
22        const next1 = i + arr[i];
23        const next2 = i - arr[i];
24        if(next1 >= 0 && next1 < arr.length) {
25            // const newSeen1 = [...seen];
26            dft(next1);
27        }
28        if(next2 >= 0 && next2 < arr.length) {
29            // const newSeen2 = [...seen];
30            dft(next2);
31        }
32    }
33
34    dft(start, seen);
35    return res.reached;
36};