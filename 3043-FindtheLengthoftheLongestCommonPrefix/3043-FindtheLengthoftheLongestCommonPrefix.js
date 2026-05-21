// Last updated: 5/21/2026, 3:13:17 PM
1/**
2 * @param {number[]} arr1
3 * @param {number[]} arr2
4 * @return {number}
5 */
6var longestCommonPrefix = function(arr1, arr2) {
7    let maxLenPrefix = 0;
8    for(let i = 0; i < arr1.length; i++) {
9        for(let j = 0; j < arr2.length; j++) {
10            const n1 = arr1[i].toString();
11            const n2 = arr2[j].toString();
12            if(n1.length < maxLenPrefix || n2.length < maxLenPrefix) {
13                continue;
14            }
15            let idx = 0;
16            while(idx < n1.length && idx < n2.length) {
17                if(n1[idx] === n2[idx]) {
18                    idx++;
19                } else {
20                    break;
21                }
22            }
23            if(idx > maxLenPrefix) {
24                maxLenPrefix = idx;
25            }
26        }
27    }
28    return maxLenPrefix;
29};
30
31var longestCommonPrefix = function(arr1, arr2) {
32    let maxLen = 0;
33    const prefixSet = new Set();
34
35    for(const num of arr1) {
36        const str = num.toString();
37
38        for(let i = 1; i <= str.length; i++) {
39            const prefix = str.slice(0, i);
40            prefixSet.add(prefix);
41        }
42    }
43
44    console.log(prefixSet);
45
46    for(const num of arr2) {
47        const str = num.toString();
48        for(let i = 1; i <= str.length; i++) {
49            const prefix = str.slice(0, i);
50            if(prefixSet.has(prefix)) {
51                if(prefix.length > maxLen) {
52                    maxLen = prefix.length;
53                }
54            }
55        }
56    }
57
58    return maxLen;
59}