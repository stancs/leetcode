// Last updated: 1/21/2026, 8:27:29 PM
1/**
2 * @param {string[]} words
3 * @return {string[]}
4 */
5var stringMatching = function(words) {
6    const output = new Set();
7    for(let i = 0; i < words.length - 1; i++) {
8        for(let j = i+1; j < words.length; j++) {
9            const w1 = words[i];
10            const w2 = words[j];
11            if(w1.includes(w2)) {
12                output.add(w2);
13            }
14            if(w2.includes(w1)) {
15                output.add(w1);
16            }
17        }
18    }
19    return [...output];
20};