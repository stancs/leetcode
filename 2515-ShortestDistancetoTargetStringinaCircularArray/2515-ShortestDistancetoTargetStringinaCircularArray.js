// Last updated: 4/15/2026, 6:45:28 AM
1/**
2 * @param {string[]} words
3 * @param {string} target
4 * @param {number} startIndex
5 * @return {number}
6 */
7var closestTarget = function(words, target, startIndex) {
8    let currIndex = startIndex;
9    const n = words.length;
10    let steps = 0;
11    while(steps < n) {
12        const index1 = (startIndex - steps + n) % n;
13        const index2 = (startIndex + steps) % n;
14        console.log(`steps: ${steps}`)
15        console.log(`index1: ${index1}`)
16        console.log(`index2: ${index2}`)
17        const word1 = words[index1];
18        const word2 = words[index2];
19        if(word1 === target || word2 === target) {
20            return steps;
21        }
22        steps++;
23    }
24    return -1;
25};