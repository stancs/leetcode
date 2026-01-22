// Last updated: 1/21/2026, 8:03:07 PM
1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var minimumPairRemoval = function(nums) {
6    const isNonDec = arr => {
7        for(let i = 0; i < arr.length - 1; i++) {
8            if(arr[i] > arr[i+1]) {
9                return false;
10            }
11        }
12        return true;
13    }
14
15    let arr = nums;
16    let count = 0;
17    while(!isNonDec(arr)) {
18        console.log('arr:', arr);
19        let min = Infinity;
20        let idx = -1;
21        for(let i = 0; i < arr.length - 1; i++) {
22            const sum = arr[i] + arr[i+1];
23            if(sum < min) {
24                min = sum;
25                idx = i;
26            }
27        }
28        const newArr = [...arr.slice(0, idx), min, ...arr.slice(idx+2)];
29        arr = newArr;
30        count++;
31    }
32    return count;
33};