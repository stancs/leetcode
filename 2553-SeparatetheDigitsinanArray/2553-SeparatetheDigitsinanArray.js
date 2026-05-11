// Last updated: 5/11/2026, 12:01:42 PM
1/**
2 * @param {number[]} nums
3 * @return {number[]}
4 */
5var separateDigits = function(nums) {
6    const res = [];
7    for(const num of nums) {
8        let curr = num;
9        let arr = [];
10        while(curr !== 0) {
11            const r = curr % 10;
12            const q = (curr - r) / 10;
13            arr.push(r);
14            curr = (curr - r) / 10;
15        }
16        const rev = arr.reverse();
17        res.push(...rev);
18    }
19    return res;
20};