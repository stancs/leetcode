// Last updated: 4/29/2026, 10:20:06 AM
/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function(words) {
    const getLetters = str => {
        const map = {};
        for(const ch of str) {
            if(map[ch] === undefined) {
                map[ch] = true;
            }
        }
        const keys = Object.keys(map);
        const sortedKeys = keys.sort();
        const sortedLetters = sortedKeys.join('');
        return sortedLetters;
    }
    const map = {};
    for(const word of words) {
        const sortedLetters = getLetters(word);
        // console.log(`${word} -> ${sortedLetters}`)
        // if(map[sortedLetters] === undefined) {
        //     map[sortedLetters] = 1;
        // } else {
        //     map[sortedLetters]++;
        // }
        map[word] = sortedLetters;
    }
    let count = 0;
    for(let i = 0; i < words.length - 1; i++) {
        for(let j = i+1; j < words.length; j++) {
            const word1 = words[i];
            const word2 = words[j];
            if(map[word1] === map[word2]) {
                count++;
            }
        }
    }
    return count;
};