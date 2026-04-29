// Last updated: 4/29/2026, 10:29:25 AM
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const words = s.split(' ');
    console.log(words);
    const reversedWords = words.map(word => word.split('').reverse().join(''));
    console.log(reversedWords);
    const res = reversedWords.join(' ');
    console.log(res);
    return res;
};