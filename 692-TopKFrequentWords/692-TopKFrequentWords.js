// Last updated: 4/29/2026, 10:28:39 AM
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
// T= 16:09s
// TC= O(n*log(n))
// SC= O(n)
var topKFrequent = function(words, k) {
    const map = {};
    for(const word of words) {
        if(map[word] === undefined) {
            map[word] = {
                word,
                freq: 1
            };
        } else {
            map[word].freq++;
        }
    }
    console.log(map);
    const compareFn = (a, b) => {
        const diff = b.freq - a.freq;
        if(diff !== 0) {
            return diff;
        } else {
            return a.word.localeCompare(b.word);
        }
    }
    const arr = Object.values(map).sort(compareFn).map(obj => obj.word);
    return arr.slice(0, k);
};