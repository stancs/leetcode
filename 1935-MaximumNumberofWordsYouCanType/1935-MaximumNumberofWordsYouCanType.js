// Last updated: 1/20/2026, 9:46:18 PM
1/**
2 * @param {string} text
3 * @param {string} brokenLetters
4 * @return {number}
5 */
6var canBeTypedWords = function(text, brokenLetters) {
7    const map = new Map();
8    for(let i = 0; i < brokenLetters.length; i++) {
9        const ch = brokenLetters[i];
10        if(map.get(ch) === undefined) {
11            map.set(ch, true);
12        }
13    }
14    const words = text.split(' ');
15    let count = 0;
16    let isBroken = false;
17    for(const word of words) {
18        isBroken = false;
19        for(const ch of word) {
20            if(map.get(ch)) {
21                isBroken = true;
22            }
23        }
24        if(!isBroken) {
25            count++;
26        }
27    }
28    return count;
29};