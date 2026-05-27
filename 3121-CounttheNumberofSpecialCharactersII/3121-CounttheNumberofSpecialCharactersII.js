// Last updated: 5/27/2026, 12:08:23 PM
1/**
2 * @param {string} word
3 * @return {number}
4 */
5var numberOfSpecialChars = function(word) {
6    const isLower = ch => ch >= 'a' && ch <= 'z';
7    const map = {};
8    for(const ch of word) {
9        const lowerCh = ch.toLowerCase();
10        if(isLower(ch)) {
11            if(map[lowerCh] >= 2 || map[lowerCh] < 0) {
12                map[lowerCh] = -1;
13            } else {
14                map[lowerCh] = 1;
15            }
16        } else {
17            if(map[lowerCh] === undefined) {
18                map[lowerCh] = -1;
19            } else if(map[lowerCh] === 1) {
20                map[lowerCh] = 3;
21            }
22        }
23    }
24    const values = Object.values(map);
25    const count = values.filter(value => value === 3).length;
26    return count;
27};