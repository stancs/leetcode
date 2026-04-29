// Last updated: 4/29/2026, 10:27:25 AM
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
// 27:29s
// O(n) time | O(n) space
var mostCommonWord = function(paragraph, banned) {
    const convert = char => {
        if("!?',;.".includes(char)) {
            return ' ';    
        } else {
            return char;
        }
    };
    const str = paragraph.toLowerCase().split('').map(convert).filter(char => char >= 'a' && char <= 'z' || char === ' ').join('');
    // Remove consequent spaces
    const words = str.split(' ').filter(word => word.length > 0);
    const hash = {}, bannedHash = {};
    for(const word of banned) {
        if(!bannedHash[word]) {
            bannedHash[word] = true;
        } 
    }
    
    let maxFreq = 0;
    let maxWord;
    for(const word of words) {
        if(!bannedHash[word]) {
            if(hash[word]) {
                hash[word]++;
            } else {
                hash[word] = 1;
            }
            if(hash[word] > maxFreq) {
                maxFreq = hash[word];
                maxWord = word;
            }
        }
    }
    return maxWord;
};