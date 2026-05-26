// Last updated: 5/25/2026, 11:31:17 PM
1/**
2 * @param {string} word
3 * @return {number}
4 */
5var numberOfSpecialChars = function(word) {
6    const base = 'a'.charCodeAt(0);
7    const BASE = 'A'.charCodeAt(0);
8    const arr = new Array(26).fill(0);
9    const isLower = ch => ch.charCodeAt(0) >= base;
10    const getCharCode = ch => ch.
11    console.log(`base: ${base}, BASE: ${BASE}`)
12    let count = 0;
13    for(const ch of word) {
14        if(isLower(ch)) {
15            const idx = ch.charCodeAt(0) - base;
16            if(arr[idx] === 0) {
17                arr[idx] = 1;
18            } else if(arr[idx] === 2) {
19                arr[idx] = 3;
20                count++;
21            } else if(arr[idx] === 3) {
22                continue;
23            }
24        } else {
25            const idx = ch.charCodeAt(0) - BASE;
26            if(arr[idx] === 0) {
27                arr[idx] = 2;
28            } else if(arr[idx] === 1) {
29                arr[idx] = 3;
30                count++;
31            } else if(arr[idx] === 3) {
32                continue;
33            }
34        }
35    }
36    return count;
37};