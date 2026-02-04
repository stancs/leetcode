// Last updated: 2/3/2026, 6:53:45 PM
1/**
2 * @param {number[]} nums
3 * @return {boolean}
4 */
5var isTrionic = function(nums) {
6    let state = 0;
7    for(let i = 0; i < nums.length - 1; i++) {
8        const p = nums[i];
9        const q = nums[i+1];
10        if(state === 0) {
11            if(p < q) {
12                state = 1;
13            } else {
14                state = -1;
15            }
16        } else if(state === 1) {
17            if(p > q) {
18                state = 2;
19            } else if(p === q) {
20                state = -1;
21            }
22        } else if(state === 2) {
23            if(p < q) {
24                state = 3;
25            } else if(p === q){
26                state = -1;
27            }
28        } else if(state === 3) {
29            if(p >= q) {
30                state = -1;
31            }
32        }
33        console.log(`${p}, ${q}: state ${state}`)
34    }
35    return state === 3;
36};