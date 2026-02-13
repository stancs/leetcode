// Last updated: 2/13/2026, 8:49:01 AM
1/**
2 * @param {string} s
3 * @return {number}
4 */
5var firstUniqChar = function(s) {
6    const map = {};
7    for(const ch of s) {
8        if(map[ch] === undefined) {
9            map[ch] = 1;
10        } else {
11            map[ch]++;
12        }
13    }
14    for(let i = 0; i < s.length; i++) {
15        const ch = s[i];
16        if(map[ch] === 1) {
17            return i;
18        }    
19    }
20    return -1;
21    
22};