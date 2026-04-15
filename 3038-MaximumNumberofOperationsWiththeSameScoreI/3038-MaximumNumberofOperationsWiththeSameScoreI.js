// Last updated: 4/15/2026, 7:01:03 AM
1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var maxOperations = function(nums) {
6  let sum = null;
7  let count = 0;
8  while(nums.length >= 2) {
9    const n1 = nums.shift();
10    const n2 = nums.shift();
11    if(sum === null) {
12        sum = n1 + n2;
13        count = 1;
14    } else {
15        if(sum === n1 + n2) {
16            count++;
17        } else {
18            return count;
19        }
20    }
21  }
22  return count;
23};