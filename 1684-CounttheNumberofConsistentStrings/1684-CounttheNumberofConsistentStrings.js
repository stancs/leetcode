// Last updated: 1/21/2026, 8:22:22 PM
1/**
2 * @param {string} allowed
3 * @param {string[]} words
4 * @return {number}
5 */
6var countConsistentStrings = function(allowed, words) {
7    const map = {};
8    for(const ch of allowed) {
9        if(map[ch] === undefined) {
10            map[ch] = true;
11        }
12    }
13    let count = 0;
14    let isConsistent;
15    for(const word of words) {
16        isConsistent = true;
17        for(const ch of word) {
18            if(map[ch] === undefined) {
19                isConsistent = false;
20                break;
21            }
22        }
23        if(isConsistent) {
24            count++;
25        }
26    }
27    return count;
28};