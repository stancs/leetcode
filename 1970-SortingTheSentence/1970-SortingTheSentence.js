// Last updated: 4/29/2026, 10:22:25 AM
/**
 * @param {string} s
 * @return {string}
 */
// 8:05s
var sortSentence = function(s) {
    const words = s.split(' ');
    const arr = new Array(words.length).fill('');
    console.log(arr);
    for(const word of words) {
        console.log(`word: ${word}`)
        const idx = parseInt(word[word.length - 1]) - 1;
        console.log(`idx: ${idx}`)
        const str = word.substring(0, word.length - 1);
        console.log(`str: ${str}`)
        arr[idx] = str;
    }
    return arr.join(' '); 
};