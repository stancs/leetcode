// Last updated: 1/21/2026, 8:17:02 PM
1/**
2 * @param {string[]} words
3 * @return {number}
4 */
5var similarPairs = function(words) {
6    const getLetters = str => {
7        const map = {};
8        for(const ch of str) {
9            if(map[ch] === undefined) {
10                map[ch] = true;
11            }
12        }
13        const keys = Object.keys(map);
14        const sortedKeys = keys.sort();
15        const sortedLetters = sortedKeys.join('');
16        return sortedLetters;
17    }
18    const map = {};
19    for(const word of words) {
20        const sortedLetters = getLetters(word);
21        // console.log(`${word} -> ${sortedLetters}`)
22        // if(map[sortedLetters] === undefined) {
23        //     map[sortedLetters] = 1;
24        // } else {
25        //     map[sortedLetters]++;
26        // }
27        map[word] = sortedLetters;
28    }
29    let count = 0;
30    for(let i = 0; i < words.length - 1; i++) {
31        for(let j = i+1; j < words.length; j++) {
32            const word1 = words[i];
33            const word2 = words[j];
34            if(map[word1] === map[word2]) {
35                count++;
36            }
37        }
38    }
39    return count;
40};