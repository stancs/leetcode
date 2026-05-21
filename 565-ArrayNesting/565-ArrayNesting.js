// Last updated: 5/21/2026, 4:56:44 PM
1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var arrayNesting = function(nums) {
6    const visited = new Array(nums.length).fill(false);
7    const len = nums.length;
8    let maxLen = 0;
9    for(let k = 0; k < len; k++) {
10        if(visited[k]) {
11            continue;
12        }
13        let item = k;
14        let count = 0;
15        while(!visited[item]) {
16            visited[item] = true;
17            item = nums[item];
18            count++;
19        }
20        maxLen = Math.max(maxLen, count);
21    }
22    return maxLen;
23};