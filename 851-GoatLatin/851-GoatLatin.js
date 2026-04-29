// Last updated: 4/29/2026, 10:27:24 AM
/**
 * @param {string} S
 * @return {string}
 */
// 9:32s
// O(n) time | O(n) space
var toGoatLatin = function(S) {
    const words = S.split(' ');
    const output = [];
    for(let i = 0; i < words.length; i++) {
        let outputWord;
        const word = words[i];
        const firstChar = word[0];
        if(isVowel(firstChar)) {
            outputWord = word + 'ma';
        } else {
            outputWord = word.slice(1) + word.slice(0, 1) + 'ma';
        }
        for(let j = 0; j <= i; j++) {
            outputWord += 'a';
        }
        output.push(outputWord);
    }
    return output.join(' ');
};

function isVowel(char) {
    if('aeiou'.includes(char.toLowerCase())) {
        return true;
    } else {
        return false;
    }
}
