// Last updated: 5/20/2026, 2:05:09 PM
1/**
2 * @param {number[]} A
3 * @param {number[]} B
4 * @return {number[]}
5 */
6var findThePrefixCommonArray = function(A, B) {
7    const len = A.length;
8    const map = {};
9    const res = [];
10    for(let i = 0; i < len; i++) {
11        const a = A[i];
12        const b = B[i];
13        if(map[a] === undefined) {
14            map[a] = 1;
15        } else {
16            map[a]++;
17        }
18        if(map[b] === undefined) {
19            map[b] = -1;
20        } else {
21            map[b]--;
22        }
23        const values = Object.values(map);
24        console.log(values);
25        const count = values.filter(val => val === 0).length;
26        res.push(count);
27    }
28    return res;
29};