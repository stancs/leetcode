// Last updated: 4/29/2026, 10:23:04 AM
/**
 * @param {string} text
 * @return {string}
 */
// 28:42s
// O(n) time | O(n) space
var reorderSpaces = function(text) {
    const arr = text.split(' ');
    console.log(arr);
    const words = arr.filter(word => word.length !== 0);
    console.log(words);
    const lenText = text.length;
    const lenWords = words.join('').length;
    const lenSpaces = lenText - lenWords;
    const numSpaces = words.length - 1;
    const maxSpaces = numSpaces !== 0? Math.floor(lenSpaces / numSpaces): 0;
    const residue = lenSpaces - maxSpaces * numSpaces;
    console.log(`lenText: ${lenText}, lenWords: ${lenWords}`);
    console.log(`lenSpaces: ${lenSpaces}, numSpaces: ${numSpaces}, maxSpaces: ${maxSpaces}, residue: ${residue}`);
    
    let str = '';
    for(let i = 0; i < words.length; i++) {
        if(i !== 0) {
            str += spaces(maxSpaces);
        }
        str += words[i];
        if(i === words.length - 1 && residue !== 0) {
            str += spaces(residue);
        }
    }
    return str;
};

function spaces(n) {
    let str = '';
    for(let i = 0; i < n; i++) {
        str += ' ';
    }
    return str;
}